describe("Map", () => {
  context("when visiting the map for lnb3_vihtestparit", () => {
    it("renders", () => {
      cy.visit(
        "/carte/indicateurs/indice-de-parite-homme-femme-couverture-du-test-vih"
      );
      cy.get("svg").should("exist");
    });

    it("colors departments correctly", () => {
      cy.get(`path[name="Atacora"]`).should(
        "have.attr",
        "fill",
        "rgb(140, 131, 189)"
      );
      cy.get(`path[name="Alibori"]`).should(
        "have.attr",
        "fill",
        "rgb(77, 0, 75)"
      );
      cy.get(`path[name="Borgou"]`).should(
        "have.attr",
        "fill",
        "rgb(247, 252, 253)"
      );
    });

    it("displays indicator info in drawer", () => {
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Indice de parité homme/ femme: Couverture du test VIH"
      );
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Dimension genre · Indicateur"
      );
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Cet indicateur exprime le rapport du pourcentage des hommes de 15-49 ans qui savent où on peut faire un test VIH et du pourcentage des femmes de 15-49 ans qui savent où on peut faire un test VIH"
      );
    });

    it("displays legend in drawer", () => {
      cy.get(".MuiDrawer-docked").should("contain", "Légende");
      cy.get(".MuiDrawer-docked").should("contain", "Objectif à long terme");
      cy.get(".MuiDrawer-docked").should("contain", "limite inférieure");
    });

    it("does not display legend in the map control", () => {
      cy.contains("#content div", "Légende").should("not.be.visible");
    });

    context("when the screen size is desktop", () => {
      beforeEach(() => {
        cy.viewport(1280, 800);
      });

      it("displays legend in map controls", () => {
        cy.get("#content").should("contain", "Légende");
        cy.get("#content").should("contain", "Objectif à long terme");
        cy.get("#content").should("contain", "limite inférieure");
      });
    });

    it("displays indicator metadata in drawer", () => {
      cy.get(".MuiDrawer-docked div:contains(Objectif à long terme)")
        .last()
        .within(() => {
          cy.contains("Ne laisser personne de côté");
          cy.contains(
            "L'objectif à long terme pour cet indicateur est une valeur de 1."
          );
        });
      cy.get(".MuiDrawer-docked div:contains(Source)")
        .last()
        .within(() => {
          cy.contains("EDSB-5 (2017/2018)");
        });
      cy.get(".MuiDrawer-docked div:contains(Référence)")
        .last()
        .within(() => {
          cy.contains(
            "Institut National de la Statistique et de l’Analyse Économique (INSAE) et ICF. (2019). Enquête Démographique et de Santé au Bénin, 2017-2018. Cotonou, Bénin et Rockville, Maryland, USA : INSAE et ICF."
          );
        });
    });

    context("when clicking on Atacora", () => {
      it("displays department name", () => {
        cy.get(`path[name="Atacora"]`).click();
        cy.get(".MuiDrawer-docked").contains("Atacora");
      });

      it("displays department performance", () => {
        cy.contains("0.88");
        cy.contains("2018");
      });

      it("displays indicator metadata in drawer", () => {
        cy.get(".MuiDrawer-docked div:contains(Objectif à long terme)")
          .last()
          .within(() => {
            cy.contains("Ne laisser personne de côté");
            cy.contains(
              "L'objectif à long terme pour cet indicateur est une valeur de 1."
            );
          });
        cy.get(".MuiDrawer-docked div:contains(Source)")
          .last()
          .within(() => {
            cy.contains("EDSB-5 (2017/2018)");
          });
        cy.get(".MuiDrawer-docked div:contains(Référence)")
          .last()
          .within(() => {
            cy.contains(
              "Institut National de la Statistique et de l’Analyse Économique (INSAE) et ICF. (2019). Enquête Démographique et de Santé au Bénin, 2017-2018. Cotonou, Bénin et Rockville, Maryland, USA : INSAE et ICF."
            );
          });
      });
    });

    context("when changing page via page selection button", () => {
      it("changes page to lnb4_gini", () => {
        cy.contains(
          ".MuiDrawer-docked div",
          "Indice de parité homme/ femme: Couverture du test VIH"
        ).click();
        cy.contains("div", "Rechercher")
          .parent()
          .within(() => {
            cy.get("input").type("gini");
            cy.get("input").type("{enter}");
          });
        cy.url().should("contain", "/carte/indicateurs/coefficient-de-gini");
        cy.get(".MuiDrawer-docked").should("contain", "Coefficient de Gini");
      });
    });
  });

  context("when visiting the map for lnb3_scolamparit", () => {
    it("renders", () => {
      cy.visit(
        "/carte/indicateurs/indice-de-parite-fille-garcon-nombre-median-d-annees-de-scolarite"
      );
    });

    it("colors departments with unavailable information correctly", () => {
      cy.get(`path[name="Atacora"]`).should("have.attr", "fill", "#bdbdbd");
      cy.get(`path[name="Alibori"]`).should("have.attr", "fill", "#bdbdbd");
      cy.get(`path[name="Borgou"]`).should("have.attr", "fill", "#bdbdbd");
      cy.get(`path[name="Donga"]`).should(
        "have.attr",
        "fill",
        "rgb(247, 252, 253)"
      );
    });
  });
});
