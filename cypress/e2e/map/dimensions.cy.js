import { LEGEND } from "helpers/legendForScore";

describe("Map", () => {
  it("renders", () => {
    cy.visit("/carte/dimensions/lnob1");
    cy.get("svg").should("exist");
  });

  it("colors departments according to score", () => {
    cy.get(`path[name="Atlantique"]`).should(
      "have.attr",
      "fill",
      LEGEND[3].color
    );
    cy.get(`path[name="Littoral"]`).should(
      "have.attr",
      "fill",
      LEGEND[1].color
    );
    cy.get(`path[name="Ouémé"]`).should("have.attr", "fill", LEGEND[3].color);
  });

  it("displays dimension info in drawer", () => {
    cy.get(".MuiDrawer-docked").should(
      "contain",
      "Accessibilité et qualité des services"
    );
    cy.get(".MuiDrawer-docked").should("contain", "Dimension services");
    cy.get(".MuiDrawer-docked").should(
      "contain",
      `Mesure l’accessibilité et la qualité des services de santé, d’éducation, d’eau, d’électricité et d’internet.`
    );
  });

  it("displays legend in drawer", () => {
    cy.get(".MuiDrawer-docked").should("contain", "Légende");
    cy.get(".MuiDrawer-docked").should("contain", "> 70");
    cy.get(".MuiDrawer-docked").should("contain", "50 - 60");
    cy.get(".MuiDrawer-docked").should("contain", "Information indisponible");
  });

  it("does not display legend in the map control", () => {
    cy.contains("#content div", "Légende").should("not.be.visible");
  });

  it("displays description", () => {
    cy.get(".MuiDrawer-docked").contains("div", "Description");
    cy.contains(
      `Mesure l’accessibilité et la qualité des services de santé, d’éducation, d’eau, d’électricité et d’internet.`
    );
  });
  0;

  it("displays dimensions in drawer", () => {
    cy.get(".MuiDrawer-docked")
      .contains("div", "Performance par dimension")
      .within(() => {
        cy.get("a").should("have.length", 4);
        cy.get("a")
          .eq(0)
          .should("have.attr", "href", "/carte/dimensions/lnob1");
        cy.get("a")
          .eq(3)
          .should("have.attr", "href", "/carte/dimensions/lnob4");
      });
  });

  it("does not display dimensions in the map control", () => {
    cy.contains("#content div", "Sélectionnez une dimension").should(
      "not.be.visible"
    );
  });

  it("can navigate to goal map", () => {
    cy.get(".MuiDrawer-docked")
      .contains("div", "Performance par dimension")
      .within(() => {
        cy.get("a").eq(2).click();
      });
    cy.url().should("include", "/carte/dimensions/lnob3");
    cy.go("back");
  });

  context("when the screen size is desktop", () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
      cy.visit("/carte/dimensions/lnob1");
    });

    it("displays legend in map controls", () => {
      cy.get("#content").should("contain", "Légende");
      cy.get("#content").should("contain", "> 70");
      cy.get("#content").should("contain", "50 - 60");
      cy.get("#content").should("contain", "Information indisponible");
    });

    it("does not display dimensions in drawer", () => {
      cy.contains(".MuiDrawer-docked div", "Performance par dimension").should(
        "not.be.visible"
      );
    });

    it("displays dimensions in the map controls", () => {
      cy.contains("#content", "Sélectionnez une dimension");
      cy.contains("#content div", "Sélectionnez une dimension").within(() => {
        cy.get("a").should("have.length", 4);
        cy.get("a")
          .eq(0)
          .should("have.attr", "href", "/carte/dimensions/lnob1");
        cy.get("a")
          .eq(3)
          .should("have.attr", "href", "/carte/dimensions/lnob4");
      });
    });

    it("can navigate to dimension map", () => {
      cy.contains("div", "Sélectionnez une dimension").within(() => {
        cy.get("a").eq(1).click();
      });
      cy.url({ timeout: 10000 }).should("include", "/carte/dimensions/lnob2");
      cy.go("back");
    });
  });

  it("displays indicators in drawer", () => {
    cy.get(".MuiDrawer-docked")
      .contains("div", "Indicateurs")
      .eq(0)
      .within(() => {
        cy.get("a").should("have.length", 14);
        cy.get("a")
          .eq(0)
          .should(
            "contain",
            "Accouchements assistés par du personnel de santé qualifié"
          );
        cy.get("a")
          .eq(1)
          .should("contain", "Nombre d'habitants par lits d'hopitaux");
      });
  });

  // NOTE: To review this in detail once all data is available
  it("can navigate to indicator visualization", () => {
    cy.contains("Nombre d'habitants par personnel de santé").click();
    cy.url().should(
      "include",
      "/carte/indicateurs/nombre-d-habitants-par-personnel-de-sante"
    );
  });

  context("when clicking on a department", () => {
    it("displays department name", () => {
      cy.visit("/carte/dimensions/lnob1");
      cy.get(`[name="Atlantique"]`).click();
      cy.get(".MuiDrawer-docked").contains("Atlantique");
    });

    it("displays department performance", () => {
      cy.get(".MuiDrawer-docked").should("contain", 49.98);
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Des défis majeurs subsistent"
      );
      cy.get(".MuiDrawer-docked").should("contain", "En amélioration modérée");
    });

    it("can close and reopen the drawer", () => {
      cy.get(".MuiDrawer-docked").should("contain", "Atlantique");
      cy.get(".MuiDrawer-docked").get('[aria-label="close side menu"]').click();
      cy.get(".MuiDrawer-docked").should("not.contain", "Atlantique");
      cy.get('[name="Atlantique"]').click();
    });

    it("lists dimension 1 indicators", () => {
      cy.get(".MuiDrawer-docked a").as("indicators");
      cy.get("@indicators").should("have.length", 17);
      cy.get("@indicators")
        .eq(0)
        .should(
          "contain",
          "Accouchements assistés par du personnel de santé qualifié"
        );
      cy.get("@indicators")
        .eq(1)
        .should("contain", "Nombre d'habitants par lits d'hopitaux");
      cy.get("@indicators")
        .eq(2)
        .should("contain", "Nombre d'habitants par personnel de santé");
    });

    it("lists indicators ratings", () => {
      cy.get(".MuiDrawer-docked")
        .contains("div", "Indicateurs")
        .within(() => {
          cy.get("a").should("have.length", 17);
          cy.get("a")
            .eq(9)
            .should("contain", "Population ayant accès à l'électricité");
          cy.get("a").eq(9).should("have.attr", "data-rating", "red");
          cy.get("a").eq(9).should("have.attr", "data-trend", "➚");
        });
    });

    it("can navigate to indicator visualization", () => {
      cy.contains("Accessibilité et qualité des services").click();
      cy.url().should("include", "/carte/dimensions/lnob1");
    });
  });

  context("when visiting the map for lnob4", () => {
    it("renders", () => {
      cy.visit("/carte/dimensions/lnob4");
      cy.get("svg").should("exist");
    });

    it("colors departments according to score", () => {
      cy.get(`path[name="Ouémé"]`).should("have.attr", "fill", LEGEND[0].color);
      cy.get(`path[name="Atlantique"]`).should(
        "have.attr",
        "fill",
        LEGEND[0].color
      );
      cy.get(`path[name="Donga"]`).should("have.attr", "fill", LEGEND[1].color);
      cy.get(`path[name="Zou"]`).should("have.attr", "fill", LEGEND[1].color);
      cy.get(`path[name="Atacora"]`).should(
        "have.attr",
        "fill",
        LEGEND[3].color
      );
    });

    it("displays dimension info in drawer", () => {
      cy.get(".MuiDrawer-docked").should("contain", "Inégalité des revenus");
      cy.get(".MuiDrawer-docked").should("contain", "Dimension revenu");
      cy.get(".MuiDrawer-docked").should(
        "contain",
        `Mesure les inégalités à partir du coefficient de Gini, et deux indicateurs liés aux revenus médian et moyen.`
      );
    });

    it("displays indicators in drawer", () => {
      cy.get(".MuiDrawer-docked")
        .contains("div", "Indicateurs")
        .eq(0)
        .within(() => {
          cy.get("a").should("have.length", 3);
          cy.get("a").eq(0).should("contain", "Coefficient de Gini");
          cy.get("a")
            .eq(1)
            .should(
              "contain",
              "Personnes vivant avec moins de la moitié du revenu médian"
            );
          cy.get("a")
            .eq(2)
            .should(
              "contain",
              "Personnes vivant avec un revenu plus de 50 % inférieur au revenu moyen"
            );
        });
    });

    it("displays department name", () => {
      cy.get(`[name="Atacora"]`).click();
      cy.get(".MuiDrawer-docked").contains("Atacora");
    });

    it("displays department performance", () => {
      cy.get(".MuiDrawer-docked").should("contain", 82.65);
      cy.get(".MuiDrawer-docked").should("contain", "Des défis à relever");
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Information sur les tendances indisponible"
      );
    });

    it("lists indicators ratings", () => {
      cy.get(".MuiDrawer-docked")
        .contains("div", "Indicateurs")
        .within(() => {
          cy.get("a").should("have.length", 3);
          cy.get("a").eq(0).should("contain", "Coefficient de Gini");
          cy.get("a").eq(0).should("have.attr", "data-rating", "green");
          cy.get("a").eq(0).should("have.attr", "data-trend", "•");
        });
    });
  });

  context("when changing page via page selection button", () => {
    it("changes page to dimension 2", () => {
      cy.contains(".MuiDrawer-docked div", "Inégalité des revenus").click();
      cy.contains("div", "Rechercher")
        .parent()
        .within(() => {
          cy.get("input").type("Extreme pauvrete");
          cy.get("input").type("{enter}");
        });
      cy.url().should("contain", "/carte");
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Extrême pauvreté et privation matérielle"
      );
    });
  });
});
