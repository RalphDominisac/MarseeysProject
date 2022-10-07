package com.marseeys.backend.helper;

import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.menu.MenuCategory;
import com.marseeys.backend.entity.possys.order.base.DeliveryMethod;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.entity.possys.payment.BankName;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.repository.possys.*;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@AllArgsConstructor
public class DatabaseHelper {
    private final MenuRepository menuRepository;
    private final OrderRepository orderRepository;
    private final MenuCategoryRepository menuCategoryRepository;
    private final DeliveryMethodRepository deliveryMethodRepository;
    private final BankNameRepository bankNameRepository;

    public Menu findMenu(int id) throws DatabaseException {
        return menuRepository.findMenu(id)
                .orElseThrow(() -> new DatabaseException(
                        String.valueOf(id),
                        ExceptionType.MENU_NOT_FOUND_EXCEPTION
                ));
    }

    public MenuCategory findCategory(String category) throws DatabaseException {
        return menuCategoryRepository.findCategory(category)
                .orElseThrow(() -> new DatabaseException(
                        category,
                        ExceptionType.MENU_CATEGORY_NOT_FOUND_EXCEPTION
                ));
    }

    public List<Menu> checkContentsExist(List<Integer> menuIds) throws DatabaseException {
        List<Menu> contents = new ArrayList<>();

        for (Integer menuId : menuIds) {
            Menu content = findMenu(menuId);
            contents.add(content);
        }

        return contents;
    }

    public DeliveryMethod findMethod(String method) throws DatabaseException {
        return deliveryMethodRepository.findMethod(method)
                .orElseThrow(() -> new DatabaseException(
                        method,
                        ExceptionType.DELIVERY_METHOD_NOT_FOUND_EXCEPTION
                ));
    }

    public Order findOrder(int id) throws DatabaseException {
        Order order = orderRepository.findById(id).orElseThrow(() -> new DatabaseException(
                String.valueOf(id),
                ExceptionType.ORDER_NOT_FOUND_EXCEPTION
        ));
        System.out.println(order);

        return order;
    }

    public BankName findBank(String name) throws DatabaseException {
        return bankNameRepository.findBank(name).orElseThrow(() -> new DatabaseException(
                name,
                ExceptionType.BANK_NAME_NOT_FOUND_EXCEPTION
        ));
    }
}
