package com.dermawise.backend;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SkincareController {

    @Autowired
    private KieContainer kieContainer;

    @PostMapping("/skincare/analyze")
    public SkincareResult analiziraj(@RequestBody SkincareRequest podaci) {
        System.out.println("Podaci stigli: " + podaci.getOsecajNakonPranja());

        KieSession kieSession = kieContainer.newKieSession();
        SkincareResult rezultat = new SkincareResult();

        try {
            kieSession.insert(podaci);
            kieSession.insert(rezultat);
            kieSession.fireAllRules();
        } finally {
            kieSession.dispose();
        }

        System.out.println("Izracunat tip koze: " + rezultat.getTipKoze());

        return rezultat;
    }
}