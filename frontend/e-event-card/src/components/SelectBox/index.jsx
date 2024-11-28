import React from "react";
import { Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SelectBox = React.forwardRef(
  (
    {
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      style,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    return (
      <>
        <Select
          ref={ref}
          options={options}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          chakraStyles={{
            container: (provided) => ({
              ...provided,

              ...style,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none",
              minHeight: "auto",
              width: "100%",
              color: "inherit !important",
              "&:hover": {
                border: "0 !important",
              },
              "&:focus-visible, &[data-focus-visible]": {
                boxShadow: "none !important",
              },
              "&>div": {
                padding: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#b2956d !important",
              color: state.isSelected && "fffefd !important",
              "&:hover": {
                backgroundColor: "#b2956d",
                color: "#fffefd",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            menu: ({ width, ...css }) => ({ ...css }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id == "scrollContainer";
          }}
          {...restProps}
        />
      </>
    );
  },
);

SelectBox.propTypes = {
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onchange: PropTypes.func,
  value: PropTypes.string,
};

export { SelectBox };