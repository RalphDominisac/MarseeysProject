package com.marseeys.backend.service.possys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.menu.MenuCategory;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.MenuException;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.possys.menu.MenuCategoryRequest;
import com.marseeys.backend.model.possys.menu.MenuRequest;
import com.marseeys.backend.repository.possys.MenuCategoryRepository;
import com.marseeys.backend.repository.possys.MenuRepository;
import com.marseeys.backend.service.NextSequenceService;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MenuService {
    private final NextSequenceService nextSequenceService;
    private final MenuRepository menuRepository;
    private final MenuCategoryRepository menuCategoryRepository;
    private final DatabaseHelper databaseHelper;
    private final FindHelper findHelper;

    public MenuCategory saveMenuCategory(MenuCategoryRequest menuCategoryRequest) throws DatabaseException {
        try {
            MenuCategory category = new MenuCategory(
                    nextSequenceService.getNextSequence("MenuCategorySequence"),
                    menuCategoryRequest.getName()
            );

            return menuCategoryRepository.save(category);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_MENU_CATEGORY_EXCEPTION
            );
        }
    }

    public List<MenuCategory> getCategories() {
        return menuCategoryRepository.findAll();
    }

    public void deleteMenuCategory(MenuCategoryRequest menuCategoryRequest) throws DatabaseException {
        MenuCategory category = findHelper.findCategory(menuCategoryRequest.getName());

        menuCategoryRepository.delete(category);
    }

    public Optional<List<Menu>> getMenus() {
        return menuRepository.findAllMenus();
    }

    public List<Menu> getMenuFromCategory(String category) throws DatabaseException {
        MenuCategory menuCategory = findHelper.findCategory(category);
        List<Menu> items = menuRepository.findMenusByCategoryEquals(menuCategory.getId());

        if (items.isEmpty()) {
            throw new DatabaseException(
                    String.valueOf(category),
                    ExceptionType.EMPTY_MENU_CATEGORY_EXCEPTION
            );
        } else {
            return items;
        }
    }

    public Menu saveMenu(MenuRequest menuRequest) throws DatabaseException {
        Map<Ingredient, Integer> ingredients = databaseHelper.checkIngredientsExist(menuRequest.getIngredients());

        try {
            MenuCategory category = findHelper.findCategory(menuRequest.getCategory());
            Menu menu = new Menu(
                    nextSequenceService.getNextSequence("MenuSequece"),
                    menuRequest.getName(),
                    menuRequest.getPrice(),
                    category,
                    ingredients
            );

            return menuRepository.save(menu);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_MENU_EXCEPTION
            );
        }
    }

    public Menu editMenu(int id, MenuRequest menuRequest) throws DatabaseException {
        Menu menu = findHelper.findMenu(id);
        MenuCategory category = findHelper.findCategory(menuRequest.getCategory());
        Map<Ingredient, Integer> ingredients = databaseHelper.checkIngredientsExist(menuRequest.getIngredients());

        menu.setName(menuRequest.getName());
        menu.setPrice(menuRequest.getPrice());
        menu.setCategory(category);
        menu.setIngredients(ingredients);

        return menuRepository.save(menu);
    }

    public Menu deleteMenu(int id) throws DatabaseException, MenuException {
        Menu menu = findHelper.findMenu(id);

        if (menu.isDeleted()) throw new MenuException(
                String.valueOf(id),
                ExceptionType.MENU_ALREADY_DELETED_EXCEPTION
        ); else menu.setDeleted(true);

        return menuRepository.save(menu);
    }
}
