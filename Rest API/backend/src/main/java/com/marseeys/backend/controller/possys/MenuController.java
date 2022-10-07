package com.marseeys.backend.controller.possys;

import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.MenuException;
import com.marseeys.backend.model.possys.menu.MenuRequest;
import com.marseeys.backend.service.possys.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/v1/menu")
@AllArgsConstructor
public class MenuController {
    private final MenuService menuService;

    @GetMapping()
    public ResponseEntity<Optional<List<Menu>>> getAllMenu() {
        return ResponseEntity.ok(menuService.getMenus());
    }

    @GetMapping("/{category}")
    public ResponseEntity<List<Menu>> getMenusFromCategory(@PathVariable String category) throws DatabaseException {
        return ResponseEntity.ok(menuService.getMenuFromCategory(category));
    }

    @PostMapping("/add")
    public ResponseEntity<Menu> saveMenu(@RequestBody @Valid MenuRequest Menu) throws DatabaseException {
        return new ResponseEntity<>(menuService.saveMenu(Menu), HttpStatus.CREATED);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<Menu> editMenu(@PathVariable int id, @RequestBody @Valid MenuRequest Menu) throws DatabaseException {
        return new ResponseEntity<>(menuService.editMenu(id, Menu), HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<Menu> deleteMenu(@PathVariable int id) throws DatabaseException, MenuException {
        return new ResponseEntity<>(menuService.deleteMenu(id), HttpStatus.OK);
    }
}
