import { observer } from "mobx-react-lite";
import { Box, Popper, Typography } from "@mui/material";
import { useMapStore } from "stores/mapStore";
import RegionAvatar from "components/RegionAvatar";

const MapTooltip = observer(() => {
  const mapStore = useMapStore();

  if (!mapStore.tooltip) return null;

  const department = mapStore.tooltip.department;
  const anchor = mapStore.tooltip.anchor;
  const text = mapStore.tooltip.text;

  return (
    <Popper
      open={true}
      anchorEl={anchor}
      placement="top"
      sx={{
        position: "absolute",
        zIndex: 1000,
      }}
      modifiers={[
        {
          name: "offset",
          enabled: true,
          options: {
            offset: [70, 10],
          },
        },
      ]}
    >
      <Box
        display="flex"
        alignItems="stretch"
        color="white"
        bgcolor="rgba(0, 0, 0, 0.8)"
        fontSize="0.8em"
        padding={1}
        borderRadius={1}
      >
        <Box display="flex" flexDirection="column" justifyContent="center">
          <RegionAvatar region={department} size={50} />
        </Box>
        <Box
          paddingLeft={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="body1">
            <Box component="span" fontWeight={500}>
              {department.name}
            </Box>
          </Typography>
          <Typography variant="body2">
            <Box component="span" fontWeight={300}>
              {text}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Popper>
  );
});

export default MapTooltip;
