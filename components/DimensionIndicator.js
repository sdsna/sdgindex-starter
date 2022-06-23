import { forwardRef } from "react";
import { ButtonBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useUiStore } from "stores/uiStore";

const Text = ({ styled, ...props }) => (
  <Typography fontWeight={styled.light ? 300 : null} marginX={0.5} {...props} />
);

const Button = styled(ButtonBase)({
  borderRadius: 4,
  textAlign: "left",
  alignItems: "flex-start",
  width: "100%",
  justifyContent: "flex-start",
  [":hover"]: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
});
Button.defaultProps = { focusRipple: true };

const DimensionIndicator = forwardRef(
  (
    {
      Component,
      label,
      buttonProps,
      indicator,
      value,
      light,
      onClick,
      disabled,
      ...otherProps
    },
    ref
  ) => {
    const uiStore = useUiStore();

    if (onClick === undefined) onClick = () => uiStore.openDrawer(indicator);

    if (label === undefined) label = indicator.label;

    if (Component === undefined) Component = Button;

    return (
      <Component
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        {...buttonProps}
        {...otherProps}
      >
        <Text
          styled={{ light }}
          color={disabled ? "textSecondary" : "textPrimary"}
          variant="body2"
        >
          <strong>{value} </strong>
          {label}
        </Text>
      </Component>
    );
  }
);
DimensionIndicator.displayName = "DimensionIndicator";

export default DimensionIndicator;
