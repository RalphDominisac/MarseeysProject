package com.example.marpos.controller;

import com.example.marpos.dto.ItemRequest;
import com.example.marpos.enumeration.ItemType;
import com.example.marpos.entity.item.Item;
import com.example.marpos.exception.item.BadSearchException;
import com.example.marpos.exception.item.ItemNotFoundException;
import com.example.marpos.service.ItemService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/menu")  // Port 8080
@AllArgsConstructor
public class ItemController {

    //    getItemsFromCategory - done
    //    searchItem - done
    //    saveItem - done
    //    editItem - done
    //    deleteItem - done

    private final ItemService itemService;

    @GetMapping("/{type}")
    public ResponseEntity<List<Item>> getItemsFromCategory(@PathVariable String type) throws BadSearchException {
        return ResponseEntity.ok(itemService.getItemsFromCategory(ItemType.valueOf(type.toUpperCase())));
    }

    @GetMapping
    public ResponseEntity<List<Item>> searchItem(@RequestParam(value = "name") String name) throws BadSearchException {
        return ResponseEntity.ok(itemService.searchItem(name));
    }

    @PostMapping("/add")
    public ResponseEntity<Item> saveItem(@RequestBody @Valid ItemRequest item) {
        return new ResponseEntity<>(itemService.saveItem(item), HttpStatus.CREATED);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<Item> editItem(@PathVariable int id, @RequestBody @Valid ItemRequest item) throws ItemNotFoundException {
        return new ResponseEntity<>(itemService.editItem(id, item), HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<Item> deleteItem(@PathVariable int id) throws ItemNotFoundException {
        return new ResponseEntity<>(itemService.deleteItem(id), HttpStatus.OK);
    }
}
