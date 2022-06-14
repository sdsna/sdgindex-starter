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
        fullScreen: false,
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        particles: {
          number: {
            value: 100,
          },
          size: {
            value: 3,
          },
          color: {
            value: theme.palette.primary.main,
          },
          links: {
            enable: true,
            distance: 200,
            color: {
              value: theme.palette.primary.main,
            },
            opacity: 1,
          },
          move: {
            enable: !isMobile,
            speed: 1,
          },
          opacity: {
            animation: {
              enable: false,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesSection;
