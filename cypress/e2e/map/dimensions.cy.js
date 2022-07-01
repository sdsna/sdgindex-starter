import { LEGEND } from "helpers/legendForScore";

describe("Map", () => {
  it("renders", () => {
    cy.visit("/map/dimensions/LNOB1");
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
    cy.get(`path[name="Ouémé"]`).should("have.attr", "fill", LEGEND[2].color);
  });

  it("displays dimension info in drawer", () => {
    cy.get(".MuiDrawer-docked").should(
      "contain",
      "Accessibilité et qualité des services"
    );
    cy.get(".MuiDrawer-docked").should("contain", "Dimension services");
    cy.get(".MuiDrawer-docked").should(
      "contain",
      `Les ODD sont guidés par le principe de "ne laisser personne de côté" (LNOB). L'indice "Leave-No-One-Behind" suit les inégalités selon quatre dimensions : la pauvreté, les services, le sexe et le revenu. Un score plus élevé signifie que moins de groupes de population sont laissés pour compte.`
    );
  });

  it("displays legend in drawer", () => {
    cy.get(".MuiDrawer-docked").should("contain", "Légende");
    cy.get(".MuiDrawer-docked").should("contain", "> 70");
    cy.get(".MuiDrawer-docked").should("contain", "50 - 60");
    cy.get(".MuiDrawer-docked").should("contain", "Information indisponible");
  });

  it("displays description", () => {
    cy.get(".MuiDrawer-docked").contains("div", "Description");
    cy.contains(
      `Les ODD sont guidés par le principe de "ne laisser personne de côté" (LNOB).`
    );
  });

  it("displays dimensions in drawer", () => {
    cy.get(".MuiDrawer-docked")
      .contains("div", "Performance by Dimension")
      .within(() => {
        cy.get("a").should("have.length", 4);
        cy.get("a").eq(0).should("have.attr", "href", "/map/dimensions/LNOB1");
        cy.get("a").eq(3).should("have.attr", "href", "/map/dimensions/LNOB4");
      });
  });

  it("does not display dimensions in the banner", () => {
    cy.contains(
      "#content div",
      "Sélectionnez l'une des dimensions pour la voir sur la carte."
    ).should("not.be.visible");
  });

  it("can navigate to goal map", () => {
    cy.get(".MuiDrawer-docked")
      .contains("div", "Performance by Dimension")
      .within(() => {
        cy.get("a").eq(2).click();
      });
    cy.url().should("include", "/map/dimensions/LNOB3");
    cy.go("back");
  });

  context("when the screen size is desktop", () => {
    beforeEach(() => {
      cy.viewport(1280, 800);
    });

    it("does not display dimensions in drawer", () => {
      cy.contains(".MuiDrawer-docked div", "Performance by Dimension").should(
        "not.exist"
      );
    });

    it("displays dimensions in the banner", () => {
      cy.contains(
        "#content",
        "Sélectionnez l'une des dimensions pour la voir sur la carte"
      );
      cy.contains("#content div", "Sélectionnez l'une des dimensions").within(
        () => {
          cy.get("a").should("have.length", 4);
          cy.get("a")
            .eq(0)
            .should("have.attr", "href", "/map/dimensions/LNOB1");
          cy.get("a")
            .eq(3)
            .should("have.attr", "href", "/map/dimensions/LNOB4");
        }
      );
    });

    it("can navigate to dimension map", () => {
      cy.contains(
        "div",
        "Sélectionnez l'une des dimensions pour la voir sur la carte"
      ).within(() => {
        cy.get("a").eq(1).click();
      });
      cy.url({ timeout: 10000 }).should("include", "/map/dimensions/LNOB2");
      cy.go("back");
    });
  });

  it("displays indicators in drawer", () => {
    cy.get(".MuiDrawer-docked")
      .contains("div", "Indicateurs")
      .eq(0)
      .within(() => {
        cy.get("a").should("have.length", 15);
        cy.get("a")
          .eq(0)
          .should(
            "contain",
            "Proportion d'accouchements assistés par du personnel de santé qualifié"
          );
        cy.get("a")
          .eq(1)
          .should("contain", "Nombre d'habitants par lits d'hopitaux");
      });
  });

  it("can navigate to indicator visualization", () => {
    cy.contains("Nombre de personnel de santé par habitant").click();
    cy.url().should(
      "include",
      "/map/indicators/nombre-de-personnel-de-sante-par-habitant"
    );
  });

  context("when clicking on a department", () => {
    it("displays department name", () => {
      cy.visit("/map/dimensions/LNOB1");
      cy.get(`[name="Atlantique"]`).click();
      cy.get(".MuiDrawer-docked").contains("Atlantique");
    });

    it("can close and reopen the drawer", () => {
      cy.get(".MuiDrawer-docked").should("contain", "Atlantique");
      cy.get(".MuiDrawer-docked").get('[aria-label="close side menu"]').click();
      cy.get(".MuiDrawer-docked").should("not.contain", "Atlantique");
      cy.get('[name="Atlantique"]').click();
    });

    it("lists dimension 1 indicators", () => {
      cy.get(".MuiDrawer-docked a").as("indicators");
      cy.get("@indicators").should("have.length", 15);
      cy.get("@indicators")
        .eq(0)
        .should(
          "contain",
          "Proportion d'accouchements assistés par du personnel de santé qualifié"
        );
      cy.get("@indicators")
        .eq(1)
        .should("contain", "Nombre d'habitants par lits d'hopitaux");
      cy.get("@indicators")
        .eq(2)
        .should("contain", "Nombre de personnel de santé  par habitant");
    });

    it("lists indicators ratings", () => {
      cy.get(".MuiDrawer-docked")
        .contains("div", "Indicateurs")
        .within(() => {
          cy.get("a").should("have.length", 15);
          cy.get("a").eq(9).should("contain", "Taux de succès au BAC");
          cy.get("a").eq(9).should("have.attr", "data-rating", "red");
        });
    });

    it("can navigate to indicator visualization", () => {
      cy.contains("Nombre de personnel de santé par habitant").click();
      cy.url().should(
        "include",
        "/map/indicators/nombre-de-personnel-de-sante-par-habitant"
      );
    });
  });

  context("when visiting the map for LNOB4", () => {
    it("renders", () => {
      cy.visit("/map/dimensions/LNOB4");
      cy.get("svg").should("exist");
    });

    it("colors departments according to score", () => {
      cy.get(`path[name="Ouémé"]`).should("have.attr", "fill", LEGEND[0].color);
      cy.get(`path[name="Atlantique"]`).should(
        "have.attr",
        "fill",
        LEGEND[1].color
      );
      cy.get(`path[name="Donga"]`).should("have.attr", "fill", LEGEND[3].color);
      cy.get(`path[name="Zou"]`).should("have.attr", "fill", LEGEND[4].color);
      cy.get(`path[name="Atacora"]`).should(
        "have.attr",
        "fill",
        LEGEND[5].color
      );
    });

    it("displays dimension info in drawer", () => {
      cy.get(".MuiDrawer-docked").should("contain", "Inégalité des revenus");
      cy.get(".MuiDrawer-docked").should("contain", "Dimension revenu");
      cy.get(".MuiDrawer-docked").should(
        "contain",
        `Les ODD sont guidés par le principe de "ne laisser personne de côté" (LNOB). L'indice "Leave-No-One-Behind" suit les inégalités selon quatre dimensions : la pauvreté, les services, le sexe et le revenu. Un score plus élevé signifie que moins de groupes de population sont laissés pour compte.`
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
              "Proportion de personnes vivant avec moins de la moitié du revenu médian"
            );
          cy.get("a")
            .eq(2)
            .should(
              "contain",
              "Proportion de personnes vivant avec un revenu de plus de 50 % inférieur au revenu moyen"
            );
        });
    });

    it("displays department name", () => {
      cy.get(`[name="Atacora"]`).click();
      cy.get(".MuiDrawer-docked").contains("Atacora");
    });

    it("lists indicators ratings", () => {
      cy.get(".MuiDrawer-docked")
        .contains("div", "Indicateurs")
        .within(() => {
          cy.get("a").should("have.length", 3);
          cy.get("a").eq(0).should("contain", "Coefficient de Gini");
          cy.get("a").eq(0).should("have.attr", "data-rating", "green");
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
      cy.url().should("contain", "/map");
      cy.get(".MuiDrawer-docked").should(
        "contain",
        "Extrême pauvreté et privation matérielle"
      );
    });
  });
});