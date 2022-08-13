package com.example.marpos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
