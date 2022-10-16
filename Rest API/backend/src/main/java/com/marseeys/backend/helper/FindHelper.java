package com.marseeys.backend.helper;

import com.marseeys.backend.entity.hrmsys.department.Department;
import com.marseeys.backend.entity.hrmsys.employee.Employee;
import com.marseeys.backend.entity.hrmsys.employee.Shift;
import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.ingredient.IngredientCategory;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.menu.MenuCategory;
import com.marseeys.backend.entity.possys.order.base.DeliveryMethod;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.entity.possys.payment.BankName;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.repository.hrmsys.DepartmentRepository;
import com.marseeys.backend.repository.hrmsys.EmployeeRepository;
import com.marseeys.backend.repository.hrmsys.ShiftRepository;
import com.marseeys.backend.repository.invsys.IngredientCategoryRepository;
import com.marseeys.backend.repository.invsys.IngredientRepository;
import com.marseeys.backend.repository.invsys.TransactionRepository;
import com.marseeys.backend.repository.possys.*;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class FindHelper {
    private final MenuRepository menuRepository;
    private final OrderRepository orderRepository;
    private final IngredientRepository ingredientRepository;
    private final MenuCategoryRepository menuCategoryRepository;
    private final DeliveryMethodRepository deliveryMethodRepository;
    private final BankNameRepository bankNameRepository;
    private final IngredientCategoryRepository ingredientCategoryRepository;
    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final ShiftRepository shiftRepository;
    private final TransactionRepository transactionRepository;

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

    public Ingredient findIngredient(int id) throws DatabaseException {
        return ingredientRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                        String.valueOf(id),
                        ExceptionType.INGREDIENT_NOT_FOUND_EXCEPTION
                ));
    }

    public DeliveryMethod findMethod(String method) throws DatabaseException {
        return deliveryMethodRepository.findMethod(method)
                .orElseThrow(() -> new DatabaseException(
                        method,
                        ExceptionType.DELIVERY_METHOD_NOT_FOUND_EXCEPTION
                ));
    }

    public Order findOrder(int id) throws DatabaseException {
        return orderRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                        String.valueOf(id),
                        ExceptionType.ORDER_NOT_FOUND_EXCEPTION
                ));
    }

    public BankName findBank(String name) throws DatabaseException {
        return bankNameRepository.findBank(name)
                .orElseThrow(() -> new DatabaseException(
                        name,
                        ExceptionType.BANK_NAME_NOT_FOUND_EXCEPTION
                ));
    }

    public IngredientCategory findIngredientCategory(String name) throws DatabaseException {
        return ingredientCategoryRepository.findIngredientCategory(name)
                .orElseThrow(() -> new DatabaseException(
                        name,
                        ExceptionType.INGREDIENT_CATEGORY_NOT_FOUND_EXCEPTION
                ));
    }

    public Employee findEmployee(String id) throws DatabaseException {
        return employeeRepository.findEmployee(id)
                .orElseThrow(() -> new DatabaseException(
                        id,
                        ExceptionType.EMPLOYEE_NOT_FOUND_EXCEPTION
                ));
    }

    public Department findDepartment(int id) throws DatabaseException {
        return departmentRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                        String.valueOf(id),
                        ExceptionType.DEPARTMENT_NOT_FOUND_EXCEPTION
                ));
    }

    public Shift findShift(int id) throws DatabaseException {
        return shiftRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                        String.valueOf(id),
                        ExceptionType.SHIFT_NOT_FOUND_EXCEPTION
                ));
    }

    public TransactionIn findTransactionIn(String id) throws DatabaseException {
        return transactionRepository.findTransactionIn(id)
                .orElseThrow(() -> new DatabaseException(
                    id,
                    ExceptionType.SAVE_TRANSACTION_EXCEPTION
                ));
    }
}
