package com.marseeys.backend.config;

import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.repository.possys.MenuRepository;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class StoreMenu {
    private MenuRepository menuRepository;
    @Getter
    private Map<String, Menu> availableMenu;

    @Autowired
    StoreMenu(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
        reloadMenu();
    }

    public void reloadMenu() {
        availableMenu = retrieveMenuFromDatabase();
    }

    private Map<String, Menu> retrieveMenuFromDatabase() {
        List<Menu> all = menuRepository.findAllMenus().orElse(Collections.EMPTY_LIST);
        return all.stream().collect(Collectors.toMap(menu -> menu.getName(), menu -> menu));
    }
}
