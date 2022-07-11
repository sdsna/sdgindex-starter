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
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          move: {
            direction: "top",
            enable: true,
            speed: 2,
          },
          number: {
            limit: 35,
            value: 80,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 1,
          },
          shape: {
            image: [
              {
                src: `/static/particles/green_arrow.svg`,
                height: 60,
                width: 60,
              },
              {
                src: `/static/particles/green_arrow.svg`,
                height: 60,
                width: 60,
              },
              {
                src: `/static/particles/green_arrow.svg`,
                height: 60,
                width: 60,
              },
              {
                src: `/static/particles/green_circle.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/green_circle.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/green_circle.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/red_arrow.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/red_circle.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/yellow_arrow.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/yellow_arrow.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/yellow_circle.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/orange_arrow.svg`,
                height: 45,
                width: 45,
              },
              {
                src: `/static/particles/orange_circle.svg`,
                height: 45,
                width: 45,
              },
            ],
            type: "image",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: false,
            value: 40,
          },
        },
        polygon: {
          move: {
            radius: 10,
            speed: isMobile ? 0 : 2,
          },
          scale: 1,
        },
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default ParticlesSection;
