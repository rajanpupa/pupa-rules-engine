package com.rajan.puparulesengine.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration //implements WebMvcConfigurer
{
    @Configuration
    public static class CorsConfig implements WebMvcConfigurer {

        private String corsOriginList = "http://localhost:4200";
        private String allowedCorsPattern = "/**";

        @Override
        public void addCorsMappings(CorsRegistry registry) {
            Arrays.stream(allowedCorsPattern.split(","))
                    .forEach(pattern -> {
                        registry.addMapping(pattern)
                                .allowedOrigins(corsOriginList.split(","))
                                .allowedMethods("POST", "GET", "PUT", "DELETE");
                    });
        }
    }

    @Configuration
    public static class HttpSecurityConfiguration extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .csrf()
                    .disable()
                    .authorizeRequests()
                    .antMatchers("/").permitAll();
                    ;
        }
    }



}