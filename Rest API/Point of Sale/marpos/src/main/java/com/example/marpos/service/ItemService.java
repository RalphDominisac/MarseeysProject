package com.example.marpos.service;

import com.example.marpos.entity.item.Item;
import com.example.marpos.exception.DatabaseException;
import com.example.marpos.exception.ItemException;
import com.example.marpos.model.item.ItemRequest;
import com.example.marpos.repository.ItemRepository;
import com.example.marpos.types.ExceptionTypeEnum;
import com.example.marpos.types.MenuCategory;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
// Service layer of the MenuItem class
public class ItemService {
    private final ItemRepository itemRepository;
    private final NextSequenceService nextSequenceService;

    /**
     * Retrieves all the items under a specified category from the Menu collection
     * @param category MenuCategory
     * @return list of items
     * @throws DatabaseException 10003L
     */
    public List<Item> getItemsFromCategory(MenuCategory category) throws DatabaseException {
        List<Item> items = itemRepository.findItemsByTypeEquals(category);

        if (items.isEmpty()) {
            throw new DatabaseException(
                    String.valueOf(category),
                    ExceptionTypeEnum.EMPTY_ITEM_CATEGORY_EXCEPTION
            );
        } else {
            return items;
        }
    }

    /**
     * Creates an item document.
     * @param itemRequest ItemRequest
     * @return created item
     * @throws DatabaseException 10001L
     */
    public Item saveItem(ItemRequest itemRequest) throws DatabaseException {
        try {
            Item item = Item.build(
                    nextSequenceService.getNextSequence("ItemSequence"),
                    itemRequest.getName(),
                    itemRequest.getPrice(),
                    //itemRequest.getIngredientRequests(),
                    itemRequest.getCategory(),
                    true,
                    false
            );
            return itemRepository.save(item);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionTypeEnum.SAVE_ITEM_EXCEPTION
            );
        }
    }

    /**
     * Overwrites an item with the same id.
     * @param id Integer
     * @param itemRequest ItemRequest
     * @return edited item
     * @throws DatabaseException 10002L
     */
    public Item editItem(int id, ItemRequest itemRequest) throws DatabaseException {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                        String.valueOf(id),
                        ExceptionTypeEnum.ITEM_NOT_FOUND_EXCEPTION
                ));

        item.setName(itemRequest.getName());
        item.setPrice(itemRequest.getPrice());
//        item.setIngredientRequests(itemRequest.getIngredientRequests());
        item.setCategory(itemRequest.getCategory());

        return itemRepository.save(item);
    }

    /**
     * Marks the item with specified id as deleted.
     * @param id Integer
     * @return deleted item
     * @throws DatabaseException 10002L, 10004L
     */
    public Item deleteItem(int id) throws DatabaseException, ItemException {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                        String.valueOf(id),
                        ExceptionTypeEnum.ITEM_NOT_FOUND_EXCEPTION
                ));

        if (item.isDeleted()) throw new ItemException(
                String.valueOf(id),
                ExceptionTypeEnum.ITEM_ALREADY_DELETED_EXCEPTION
        );

        item.setDeleted(true);

        return itemRepository.save(item);
    }
}
