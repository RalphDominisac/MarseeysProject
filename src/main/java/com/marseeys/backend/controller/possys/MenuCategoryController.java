package com.marseeys.backend.controller.possys;

import com.marseeys.backend.entity.possys.menu.MenuCategory;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.possys.menu.MenuCategoryRequest;
import com.marseeys.backend.service.possys.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/v1/menu/categories")
@AllArgsConstructor
public class MenuCategoryController {
    private final MenuService menuService;

    @GetMapping()
    public ResponseEntity<List<MenuCategory>> getCategories() {
        return ResponseEntity.ok(menuService.getCategories());
    }

    @PostMapping("/add")
    public ResponseEntity<MenuCategory> saveMenuCategory(@RequestBody @Valid MenuCategoryRequest categoryRequest) throws DatabaseException {
        return new ResponseEntity<>(menuService.saveMenuCategory(categoryRequest), HttpStatus.CREATED);
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteMenuCategory(@RequestBody @Valid MenuCategoryRequest categoryRequest) throws DatabaseException {
        menuService.deleteMenuCategory(categoryRequest);
        return ResponseEntity.ok("Successfully deleted!");
    }
}
