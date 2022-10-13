package com.marseeys.backend.controller.possys;

import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.MenuException;
import com.marseeys.backend.model.possys.menu.MenuRequest;
import com.marseeys.backend.service.possys.MenuService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the menu items.",
            notes = "",
            response = Menu.class,
            responseContainer = "List"
    )
    public ResponseEntity<Optional<List<Menu>>> getAllMenu() {
        return ResponseEntity.ok(menuService.getMenus());
    }

    @GetMapping("/{category}")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the menu items under the specified category.",
            notes = "The category is case sensitive as of the moment. Please make sure to " +
                    "indicate the correct category.",
            response = Menu.class,
            responseContainer = "List"
    )
    public ResponseEntity<List<Menu>> getMenusFromCategory(@PathVariable String category) throws DatabaseException {
        return ResponseEntity.ok(menuService.getMenuFromCategory(category));
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Adds a menu item based on the given object.",
            notes = "In adding ingredients, please follow the format: {'id': quantity}",
            response = Menu.class
    )
    public ResponseEntity<Menu> saveMenu(@RequestBody @Valid MenuRequest menuRequest) throws DatabaseException {
        return new ResponseEntity<>(menuService.saveMenu(menuRequest), HttpStatus.CREATED);
    }

    @PostMapping("/edit/{id}")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Edits the menu item with the specified id.",
            notes = "",
            response = Menu.class
    )
    public ResponseEntity<Menu> editMenu(@PathVariable int id, @RequestBody @Valid MenuRequest menuRequest) throws DatabaseException {
        return new ResponseEntity<>(menuService.editMenu(id, menuRequest), HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Marks the specified menu item as deleted.",
            notes = "",
            response = Menu.class
    )
    public ResponseEntity<Menu> deleteMenu(@PathVariable int id) throws DatabaseException, MenuException {
        return new ResponseEntity<>(menuService.deleteMenu(id), HttpStatus.OK);
    }
}
