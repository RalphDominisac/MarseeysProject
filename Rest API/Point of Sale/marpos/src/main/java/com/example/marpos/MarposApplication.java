package com.example.marpos;

import com.example.marpos.model.MenuItem;
import com.example.marpos.constant.MenuType;
import com.example.marpos.model.Ingredient;
import com.example.marpos.constant.IngredientQuantification;
import com.example.marpos.repo.IngredientRepository;
import com.example.marpos.repo.MenuItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.awt.*;
import java.util.List;

@SpringBootApplication
public class MarposApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarposApplication.class, args);
	}

//    @Bean   // Injecting data into the database to test if database functions as intended
//    CommandLineRunner runner(MenuItemRepository menu, IngredientRepository ingredients) {
//        return args -> {
//            // Sample ingredients
//            Ingredient celery = new Ingredient(
//                    "celery",
//					IngredientQuantification.STALK,
//                    0.5,
//					0
//            );
//            Ingredient tomato = new Ingredient(
//                    "tomato",
//					IngredientQuantification.WHOLE,
//                    5,
//					0
//            );
//            Ingredient pork = new Ingredient(
//                    "pork",
//					IngredientQuantification.KILO,
//                    2,
//					0
//            );
//
//            // Sample menu item
//            MenuItem item = new MenuItem(
//                    "Sigang na Baboy",
//					100.00,
//                    List.of(celery, tomato, pork),
//					MenuType.PORK
//            );
//
//            ingredients.insert(List.of(celery, pork, tomato));
//            menu.insert(item);
//        };
//    }
}
