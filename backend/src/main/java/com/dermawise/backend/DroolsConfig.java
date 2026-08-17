package com.dermawise.backend;

import org.kie.api.KieServices;
import org.kie.api.builder.KieFileSystem;
import org.kie.api.builder.KieRepository;
import org.kie.api.runtime.KieContainer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@Configuration
public class DroolsConfig {

    @Bean
    public KieContainer kieContainer() throws Exception {
        KieServices kieServices = KieServices.Factory.get();
        KieRepository kieRepository = kieServices.getRepository();

        KieFileSystem kieFileSystem = kieServices.newKieFileSystem();

        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        Resource[] resources = resolver.getResources("classpath:rules/*.drl");

        for (Resource resource : resources) {
            String path = "src/main/resources/rules/" + resource.getFilename();
            kieFileSystem.write(path, kieServices.getResources()
                    .newInputStreamResource(resource.getInputStream()));
        }

        kieServices.newKieBuilder(kieFileSystem).buildAll();

        return kieServices.newKieContainer(kieRepository.getDefaultReleaseId());
    }
}