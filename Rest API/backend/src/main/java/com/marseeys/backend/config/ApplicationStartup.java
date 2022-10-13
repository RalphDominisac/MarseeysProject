package com.marseeys.backend.config;

import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ApplicationStartup implements ApplicationListener<ContextRefreshedEvent> {
    private final AppConfig appConfig;
    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        appConfig.dailyInventoryCheck();
    }
}
