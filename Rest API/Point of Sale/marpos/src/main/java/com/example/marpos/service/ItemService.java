package com.example.marpos.service;

import com.example.marpos.enumeration.ItemType;
import com.example.marpos.entity.item.Item;
import com.example.marpos.repository.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
// Service layer of the MenuItem class
public class ItemService {
    private final ItemRepository itemRepository;

//    getItemsFromCategory - done
//    searchItem - done
//    saveItem - done
//    updateItem
//    deleteItem

    public Optional<List<Item>> getItemsFromCategory(ItemType type) {
        return itemRepository.findMenuItemsByTypeIs(type);
    }

    public Optional<List<Item>> searchItem(String name) {
        return itemRepository.findMenuItemsByNameContainingIgnoreCase(name);
    }

    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }
}
