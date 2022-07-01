import { useMediaQuery } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StyledParticles = styled(Particles)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

const ParticlesSection = () => {
  const theme = useTheme();
  // We must pass noSsr: true, otherwise the component performs a double render
  // which messes with styled particles.
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"), { noSsr: true });

  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <StyledParticles
      init={particlesInit}
      options={{
        background: {
          color: "#F9F6EE",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        particles: {
          number: {
            value: 1,
          },
          density: { enable: false },
          color: {
            value: [
              "#3998D0",
              "#2EB6AF",
              "#A9BD33",
              "#FEC73B",
              "#F89930",
              "#F45623",
              "#D62E32",
              "#EB586E",
              "#9952CF",
            ],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 200, max: 300 },
          },
          move: {
            enable: !isMobile,
            angle: {
              value: 1,
              offset: 0,
            },
            speed: 2,
            direction: "top",
          },
        },
        emitters: {
          position: {
            x: 50,
            y: 150,
          },
          rate: {
            delay: 15,
            quantity: 1,
          },
          size: {
            width: 100,
            height: 50,
          },
        },
      }}
    />
  );
};

export default ParticlesSection;
