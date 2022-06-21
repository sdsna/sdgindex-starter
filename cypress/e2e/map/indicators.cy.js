describe("Map", () => {
  context("when visiting the map for dim3_HIV", () => {
    it("renders", () => {
      cy.visit(
        "/map/indicators/indice-de-parite-homme-femme-couverture-du-test-vih"
      );
      cy.get("svg").should("exist");
    });

    it("colors departments correctly", () => {
      cy.get(`path[name="Atacora"]`).should(
        "have.attr",
        "fill",
        "rgb(93, 192, 192)"
      );
      cy.get(`path[name="Alibori"]`).should(
        "have.attr",
        "fill",
        "rgb(255, 255, 217)"
      );
      cy.get(`path[name="Borgou"]`).should(
        "have.attr",
        "fill",
        "rgb(8, 29, 88)"
      );
    });

    it("displays indicator info in drawer", () => {
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Indice de parité homme/ femme: Couverture du test VIH"
      );
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Dimension genre · Indicator"
      );
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Cet indicateur exprime le rapport du pourcentage des hommes de 15-49 ans qui savent où on peut faire un test VIH et du pourcentage des femmes de 15-49 ans qui savent où on peut faire un test VIH"
      );
    });

    it("displays legend in drawer", () => {
      cy.get(".MuiDrawer-docked").should("contain", "Legend");
      cy.get(".MuiDrawer-docked").should("contain", "long-term objective");
      cy.get(".MuiDrawer-docked").should("contain", "lower bound");
    });

    it("displays indicator metadata in drawer", () => {
      cy.get(".MuiDrawer-docked div:contains(Long-Term Objective)")
        .last()
        .within(() => {
          cy.contains("Leave no one behind");
          cy.contains(
            "The long-term objective for this indicator is a value of 1."
          );
        });
      cy.get(".MuiDrawer-docked div:contains(Reference)")
        .last()
        .within(() => {
          cy.contains("EDSB5 (2017/2018)");
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
        cy.get(".MuiDrawer-docked div:contains(Long-Term Objective)")
          .last()
          .within(() => {
            cy.contains("Leave no one behind");
            cy.contains(
              "The long-term objective for this indicator is a value of 1."
            );
          });
        cy.get(".MuiDrawer-docked div:contains(Reference)")
          .last()
          .within(() => {
            cy.contains("EDSB5 (2017/2018)");
          });
      });
    });

    context("when changing page via page selection button", () => {
      it("changes page to dimension 2", () => {
        cy.contains(
          ".MuiDrawer-docked div",
          "Indice de parité homme/ femme: Couverture du test VIH"
        ).click();
        cy.contains("div", "Search")
          .parent()
          .within(() => {
            cy.get("input").type("extreme pauvrete");
            cy.get("input").type("{enter}");
          });
        cy.url().should("contain", "/map/dimensions/LNOB2");
        cy.get(".MuiDrawer-docked").should(
          "contain",
          "Extrême pauvreté et privation matérielle"
        );
      });
    });
  });
});
