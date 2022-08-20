package com.example.marpos.service;

import com.example.marpos.dto.ItemRequest;
import com.example.marpos.enumeration.ItemType;
import com.example.marpos.entity.item.Item;
import com.example.marpos.exception.item.BadSearchException;
import com.example.marpos.exception.item.ItemNotFoundException;
import com.example.marpos.repository.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;


@AllArgsConstructor
@Service
// Service layer of the MenuItem class
public class ItemService {
    private final ItemRepository itemRepository;
    private final NextSequenceService nextSequenceService;

    //    getItemsFromCategory - done
    //    searchItem - done
    //    saveItem - done
    //    editItem - done
    //    deleteItem - done

    public List<Item> getItemsFromCategory(ItemType type) throws BadSearchException {
        List<Item> items = itemRepository.findItemsByTypeEquals(type);

        if(items.isEmpty()) {
            throw new BadSearchException("No items found.");
        } else {
            return items;
        }
    }

    public List<Item> searchItem(String name) throws BadSearchException {
        List<Item> items = itemRepository.findItemsByNameContainingIgnoreCase(name);

        if(items.isEmpty()) {
            throw new BadSearchException("No items found.");
        } else {
            return items;
        }
    }

    public Item saveItem(ItemRequest itemRequest) {
        try {
            Item item = Item.build(nextSequenceService.getNextSequence("ItemSequence"), itemRequest.getName(),
                    itemRequest.getPrice(), itemRequest.getIngredients(),
                    itemRequest.getType(), true,
                    false);
            return itemRepository.save(item);
        } catch (Exception ex) {
            nextSequenceService.getPrevSequence("ItemSequence");
            throw ex;
        }
    }

    public Item editItem(int id, ItemRequest itemRequest) throws ItemNotFoundException {
        Item item = itemRepository.findById(id).orElseThrow(() -> new ItemNotFoundException(id));

        item.setName(itemRequest.getName());
        item.setPrice(itemRequest.getPrice());
        item.setIngredients(itemRequest.getIngredients());
        item.setType(itemRequest.getType());

        return itemRepository.save(item);
    }

    public Item deleteItem(int id) throws ItemNotFoundException {
        Item item = itemRepository.findById(id).orElseThrow(() -> new ItemNotFoundException(id));

        item.setDeleted(true);

        return itemRepository.save(item);
    }
}
