const styles = {
  "App": {
    "textAlign": "center"
  },
  "App_logo": {
    "animation": "App-logo-spin infinite 20s linear",
    "height": "80px"
  },
  "App_header": {
    "backgroundColor": "#222",
    "height": "150px",
    "padding": "20px",
    "color": "white"
  },
  "App_title": {
    "fontSize": "1.5em"
  },
  "App_intro": {
    "fontSize": "large"
  },
  "slide_in_down_mui_enter": {
    "WebkitTransform": "translateY(-100%)",
    "MsTransform": "translateY(-100%)",
    "transform": "translateY(-100%)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden"
  },
  "slide_in_left_mui_enter": {
    "WebkitTransform": "translateX(-100%)",
    "MsTransform": "translateX(-100%)",
    "transform": "translateX(-100%)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden"
  },
  "slide_in_up_mui_enter": {
    "WebkitTransform": "translateY(100%)",
    "MsTransform": "translateY(100%)",
    "transform": "translateY(100%)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden"
  },
  "slide_in_right_mui_enter": {
    "WebkitTransform": "translateX(100%)",
    "MsTransform": "translateX(100%)",
    "transform": "translateX(100%)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden"
  },
  "slide_out_down_mui_leave": {
    "WebkitTransform": "translateY(0)",
    "MsTransform": "translateY(0)",
    "transform": "translateY(0)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden"
  },
  "slide_out_right_mui_leave": {
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden"
  },
  "slide_out_up_mui_leave": {
    "WebkitTransform": "translateY(0)",
    "MsTransform": "translateY(0)",
    "transform": "translateY(0)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden"
  },
  "slide_out_left_mui_leave": {
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden"
  },
  "fade_in_mui_enter": {
    "opacity": "0",
    "transitionProperty": "opacity"
  },
  "fade_out_mui_leave": {
    "opacity": "1",
    "transitionProperty": "opacity"
  },
  "hinge_in_from_top_mui_enter": {
    "WebkitTransform": "perspective(2000px) rotateX(-90deg)",
    "transform": "perspective(2000px) rotateX(-90deg)",
    "WebkitTransformOrigin": "top",
    "MsTransformOrigin": "top",
    "transformOrigin": "top",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "hinge_in_from_right_mui_enter": {
    "WebkitTransform": "perspective(2000px) rotateY(-90deg)",
    "transform": "perspective(2000px) rotateY(-90deg)",
    "WebkitTransformOrigin": "right",
    "MsTransformOrigin": "right",
    "transformOrigin": "right",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "hinge_in_from_bottom_mui_enter": {
    "WebkitTransform": "perspective(2000px) rotateX(90deg)",
    "transform": "perspective(2000px) rotateX(90deg)",
    "WebkitTransformOrigin": "bottom",
    "MsTransformOrigin": "bottom",
    "transformOrigin": "bottom",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "hinge_in_from_left_mui_enter": {
    "WebkitTransform": "perspective(2000px) rotateY(90deg)",
    "transform": "perspective(2000px) rotateY(90deg)",
    "WebkitTransformOrigin": "left",
    "MsTransformOrigin": "left",
    "transformOrigin": "left",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "hinge_in_from_middle_x_mui_enter": {
    "WebkitTransform": "perspective(2000px) rotateX(-90deg)",
    "transform": "perspective(2000px) rotateX(-90deg)",
    "WebkitTransformOrigin": "center",
    "MsTransformOrigin": "center",
    "transformOrigin": "center",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "hinge_in_from_middle_y_mui_enter": {
    "WebkitTransform": "perspective(2000px) rotateY(-90deg)",
    "transform": "perspective(2000px) rotateY(-90deg)",
    "WebkitTransformOrigin": "center",
    "MsTransformOrigin": "center",
    "transformOrigin": "center",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "hinge_out_from_top_mui_leave": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "WebkitTransformOrigin": "top",
    "MsTransformOrigin": "top",
    "transformOrigin": "top",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "hinge_out_from_right_mui_leave": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "WebkitTransformOrigin": "right",
    "MsTransformOrigin": "right",
    "transformOrigin": "right",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "hinge_out_from_bottom_mui_leave": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "WebkitTransformOrigin": "bottom",
    "MsTransformOrigin": "bottom",
    "transformOrigin": "bottom",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "hinge_out_from_left_mui_leave": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "WebkitTransformOrigin": "left",
    "MsTransformOrigin": "left",
    "transformOrigin": "left",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "hinge_out_from_middle_x_mui_leave": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "WebkitTransformOrigin": "center",
    "MsTransformOrigin": "center",
    "transformOrigin": "center",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "hinge_out_from_middle_y_mui_leave": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "WebkitTransformOrigin": "center",
    "MsTransformOrigin": "center",
    "transformOrigin": "center",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "scale_in_up_mui_enter": {
    "WebkitTransform": "scale(0.5)",
    "MsTransform": "scale(0.5)",
    "transform": "scale(0.5)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "scale_in_down_mui_enter": {
    "WebkitTransform": "scale(1.5)",
    "MsTransform": "scale(1.5)",
    "transform": "scale(1.5)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "scale_out_up_mui_leave": {
    "WebkitTransform": "scale(1)",
    "MsTransform": "scale(1)",
    "transform": "scale(1)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "scale_out_down_mui_leave": {
    "WebkitTransform": "scale(1)",
    "MsTransform": "scale(1)",
    "transform": "scale(1)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "spin_in_mui_enter": {
    "WebkitTransform": "rotate(-0.75turn)",
    "MsTransform": "rotate(-0.75turn)",
    "transform": "rotate(-0.75turn)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "spin_out_mui_leave": {
    "WebkitTransform": "rotate(0)",
    "MsTransform": "rotate(0)",
    "transform": "rotate(0)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "spin_in_ccw_mui_enter": {
    "WebkitTransform": "rotate(0.75turn)",
    "MsTransform": "rotate(0.75turn)",
    "transform": "rotate(0.75turn)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "0"
  },
  "spin_out_ccw_mui_leave": {
    "WebkitTransform": "rotate(0)",
    "MsTransform": "rotate(0)",
    "transform": "rotate(0)",
    "transitionProperty": "transform, opacity, -webkit-transform",
    "opacity": "1"
  },
  "html": {
    "height": "100%"
  },
  "body": {
    "height": "100%"
  },
  "article": {
    "display": "block"
  },
  "aside": {
    "display": "block"
  },
  "details": {
    "display": "block"
  },
  "figcaption": {
    "display": "block"
  },
  "figure": {
    "margin": "1em 40px"
  },
  "footer": {
    "display": "block"
  },
  "header": {
    "display": "block"
  },
  "hgroup": {
    "display": "block"
  },
  "main": {
    "display": "block"
  },
  "menu": {
    "margin": "0",
    "listStyleType": "none"
  },
  "nav": {
    "display": "block"
  },
  "section": {
    "display": "block"
  },
  "summary": {
    "display": "block"
  },
  "audio": {
    "display": "inline-block",
    "verticalAlign": "baseline"
  },
  "canvas": {
    "display": "inline-block",
    "verticalAlign": "baseline"
  },
  "progress": {
    "backgroundColor": "#cacaca",
    "height": "1rem",
    "marginBottom": "1rem",
    "borderRadius": "0"
  },
  "video": {
    "display": "inline-block",
    "verticalAlign": "baseline"
  },
  "audio_not__controls": {
    "display": "none",
    "height": "0"
  },
  "hidden": {
    "display": "none"
  },
  "template": {
    "display": "none"
  },
  "a": {
    "color": "#2199e8",
    "textDecoration": "none",
    "lineHeight": "inherit",
    "cursor": "pointer"
  },
  "a_active": {
    "outline": "0"
  },
  "a_hover": {
    "color": "#1585cf"
  },
  "abbr_title": {
    "borderBottom": "1px dotted"
  },
  "b": {
    "fontWeight": "bold",
    "lineHeight": "inherit"
  },
  "strong": {
    "fontWeight": "bold",
    "lineHeight": "inherit"
  },
  "dfn": {
    "fontStyle": "italic"
  },
  "h1": {
    "fontSize": "1.5rem"
  },
  "mark": {
    "background": "#ff0",
    "color": "#000"
  },
  "small": {
    "fontSize": "80%",
    "lineHeight": "inherit"
  },
  "sub": {
    "bottom": "-0.25em"
  },
  "sup": {
    "top": "-0.5em"
  },
  "img": {
    "maxWidth": "100%",
    "height": "auto",
    "MsInterpolationMode": "bicubic",
    "display": "inline-block",
    "verticalAlign": "middle"
  },
  "svg_not__root": {
    "overflow": "hidden"
  },
  "hr": {
    "maxWidth": "75rem",
    "height": "0",
    "borderRight": "0",
    "borderTop": "0",
    "borderBottom": "1px solid #cacaca",
    "borderLeft": "0",
    "margin": "1.25rem auto",
    "clear": "both"
  },
  "pre": {
    "margin": "0",
    "padding": "0"
  },
  "code": {
    "fontFamily": "Consolas, \"Liberation Mono\", Courier, monospace",
    "fontWeight": "normal",
    "color": "#0a0a0a",
    "backgroundColor": "#e6e6e6",
    "border": "1px solid #cacaca",
    "padding": "0.125rem 0.3125rem 0.0625rem"
  },
  "kbd": {
    "padding": "0.125rem 0.25rem 0",
    "margin": "0",
    "backgroundColor": "#e6e6e6",
    "color": "#0a0a0a",
    "fontFamily": "Consolas, \"Liberation Mono\", Courier, monospace"
  },
  "samp": {
    "fontFamily": "monospace, monospace",
    "fontSize": "1em"
  },
  "button": {
    "display": "inline-block",
    "textAlign": "center",
    "lineHeight": "1",
    "cursor": "pointer",
    "WebkitAppearance": "none",
    "transition": "background-color 0.25s ease-out, color 0.25s ease-out",
    "verticalAlign": "middle",
    "border": "1px solid transparent",
    "borderRadius": "0",
    "padding": "0.85em 1em",
    "margin": "0 0 1rem 0",
    "fontSize": "0.9rem",
    "backgroundColor": "#2199e8",
    "color": "#fff"
  },
  "input": {
    "lineHeight": "normal"
  },
  "optgroup": {
    "fontWeight": "bold"
  },
  "select": {
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontSize": "1rem",
    "fontFamily": "inherit",
    "lineHeight": "normal",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "borderRadius": "0",
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "backgroundImage": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"32\" height=\"24\" viewBox=\"0 0 32 24\"><polygon points=\"0,0 32,0 16,24\" style=\"fill: rgb%2851, 51, 51%29\"></polygon></svg>')",
    "backgroundSize": "9px 6px",
    "backgroundPosition": "right 0.5rem center",
    "backgroundRepeat": "no-repeat"
  },
  "textarea": {
    "maxWidth": "100%"
  },
  "html_input_type__button": {
    "WebkitAppearance": "button",
    "cursor": "pointer"
  },
  "input_type__reset": {
    "WebkitAppearance": "button",
    "cursor": "pointer"
  },
  "input_type__submit": {
    "WebkitAppearance": "button",
    "cursor": "pointer"
  },
  "button_disabled": {
    "opacity": "0.25",
    "cursor": "not-allowed",
    "pointerEvents": "none"
  },
  "html_input_disabled": {
    "cursor": "default"
  },
  "button___moz_focus_inner": {
    "border": "0",
    "padding": "0"
  },
  "input___moz_focus_inner": {
    "border": "0",
    "padding": "0"
  },
  "input_type__checkbox": {
    "boxSizing": "border-box",
    "padding": "0"
  },
  "input_type__radio": {
    "boxSizing": "border-box",
    "padding": "0"
  },
  "input_type__number_____webkit_inner_spin_button": {
    "height": "auto"
  },
  "input_type__number_____webkit_outer_spin_button": {
    "height": "auto"
  },
  "input_type__search": {
    "boxSizing": "border-box"
  },
  "input_type__search_____webkit_search_cancel_button": {
    "WebkitAppearance": "none"
  },
  "input_type__search_____webkit_search_decoration": {
    "WebkitAppearance": "none"
  },
  "fieldset": {
    "border": "1px solid #cacaca",
    "padding": "1.25rem",
    "margin": "1.125rem 0"
  },
  "legend": {
    "marginBottom": "0.5rem"
  },
  "table": {
    "marginBottom": "1rem",
    "borderRadius": "0"
  },
  "td": {
    "margin": "0",
    "padding": "0"
  },
  "th": {
    "margin": "0",
    "padding": "0"
  },
  "foundation_mq": {
    "fontFamily": "\"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\""
  },
  "": {
    "boxSizing": "inherit"
  },
  "before": {
    "boxSizing": "inherit"
  },
  "after": {
    "boxSizing": "inherit"
  },
  "map_canvas_img": {
    "maxWidth": "none !important"
  },
  "map_canvas_embed": {
    "maxWidth": "none !important"
  },
  "map_canvas_object": {
    "maxWidth": "none !important"
  },
  "mqa_display_img": {
    "maxWidth": "none !important"
  },
  "mqa_display_embed": {
    "maxWidth": "none !important"
  },
  "mqa_display_object": {
    "maxWidth": "none !important"
  },
  "row": {
    "maxWidth": "75rem",
    "marginLeft": "auto",
    "marginRight": "auto"
  },
  "row__before": {
    "content": "' '",
    "display": "table"
  },
  "row__after": {
    "clear": "both"
  },
  "row_collapse____column": {
    "paddingLeft": "0",
    "paddingRight": "0"
  },
  "row_collapse____columns": {
    "paddingLeft": "0",
    "paddingRight": "0"
  },
  "row__row": {
    "marginLeft": "-0.625rem",
    "marginRight": "-0.625rem"
  },
  "@media screen and (min-width: 40em)": {
    "__expression__": "screen and (min-width: 40em)",
    "row__row": {
      "marginLeft": "-0.9375rem",
      "marginRight": "-0.9375rem"
    },
    "column": {
      "paddingLeft": "0.9375rem",
      "paddingRight": "0.9375rem"
    },
    "columns": {
      "paddingLeft": "0.9375rem",
      "paddingRight": "0.9375rem"
    },
    "medium_1": {
      "width": "8.33333%"
    },
    "medium_push_1": {
      "position": "relative",
      "left": "8.33333%"
    },
    "medium_pull_1": {
      "position": "relative",
      "left": "-8.33333%"
    },
    "medium_offset_0": {
      "marginLeft": "0%"
    },
    "medium_2": {
      "width": "16.66667%"
    },
    "medium_push_2": {
      "position": "relative",
      "left": "16.66667%"
    },
    "medium_pull_2": {
      "position": "relative",
      "left": "-16.66667%"
    },
    "medium_offset_1": {
      "marginLeft": "8.33333%"
    },
    "medium_3": {
      "width": "25%"
    },
    "medium_push_3": {
      "position": "relative",
      "left": "25%"
    },
    "medium_pull_3": {
      "position": "relative",
      "left": "-25%"
    },
    "medium_offset_2": {
      "marginLeft": "16.66667%"
    },
    "medium_4": {
      "width": "33.33333%"
    },
    "medium_push_4": {
      "position": "relative",
      "left": "33.33333%"
    },
    "medium_pull_4": {
      "position": "relative",
      "left": "-33.33333%"
    },
    "medium_offset_3": {
      "marginLeft": "25%"
    },
    "medium_5": {
      "width": "41.66667%"
    },
    "medium_push_5": {
      "position": "relative",
      "left": "41.66667%"
    },
    "medium_pull_5": {
      "position": "relative",
      "left": "-41.66667%"
    },
    "medium_offset_4": {
      "marginLeft": "33.33333%"
    },
    "medium_6": {
      "width": "50%"
    },
    "medium_push_6": {
      "position": "relative",
      "left": "50%"
    },
    "medium_pull_6": {
      "position": "relative",
      "left": "-50%"
    },
    "medium_offset_5": {
      "marginLeft": "41.66667%"
    },
    "medium_7": {
      "width": "58.33333%"
    },
    "medium_push_7": {
      "position": "relative",
      "left": "58.33333%"
    },
    "medium_pull_7": {
      "position": "relative",
      "left": "-58.33333%"
    },
    "medium_offset_6": {
      "marginLeft": "50%"
    },
    "medium_8": {
      "width": "66.66667%"
    },
    "medium_push_8": {
      "position": "relative",
      "left": "66.66667%"
    },
    "medium_pull_8": {
      "position": "relative",
      "left": "-66.66667%"
    },
    "medium_offset_7": {
      "marginLeft": "58.33333%"
    },
    "medium_9": {
      "width": "75%"
    },
    "medium_push_9": {
      "position": "relative",
      "left": "75%"
    },
    "medium_pull_9": {
      "position": "relative",
      "left": "-75%"
    },
    "medium_offset_8": {
      "marginLeft": "66.66667%"
    },
    "medium_10": {
      "width": "83.33333%"
    },
    "medium_push_10": {
      "position": "relative",
      "left": "83.33333%"
    },
    "medium_pull_10": {
      "position": "relative",
      "left": "-83.33333%"
    },
    "medium_offset_9": {
      "marginLeft": "75%"
    },
    "medium_11": {
      "width": "91.66667%"
    },
    "medium_push_11": {
      "position": "relative",
      "left": "91.66667%"
    },
    "medium_pull_11": {
      "position": "relative",
      "left": "-91.66667%"
    },
    "medium_offset_10": {
      "marginLeft": "83.33333%"
    },
    "medium_12": {
      "width": "100%"
    },
    "medium_offset_11": {
      "marginLeft": "91.66667%"
    },
    "medium_up_1____column": {
      "width": "100%",
      "float": "left"
    },
    "medium_up_1____columns": {
      "width": "100%",
      "float": "left"
    },
    "medium_up_1____column_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_1____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_1____column_nth_of_type_1n_1": {
      "clear": "both"
    },
    "medium_up_1____columns_nth_of_type_1n_1": {
      "clear": "both"
    },
    "medium_up_1____column_last_child": {
      "float": "left"
    },
    "medium_up_1____columns_last_child": {
      "float": "left"
    },
    "medium_up_2____column": {
      "width": "50%",
      "float": "left"
    },
    "medium_up_2____columns": {
      "width": "50%",
      "float": "left"
    },
    "medium_up_2____column_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_2____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_2____column_nth_of_type_2n_1": {
      "clear": "both"
    },
    "medium_up_2____columns_nth_of_type_2n_1": {
      "clear": "both"
    },
    "medium_up_2____column_last_child": {
      "float": "left"
    },
    "medium_up_2____columns_last_child": {
      "float": "left"
    },
    "medium_up_3____column": {
      "width": "33.33333%",
      "float": "left"
    },
    "medium_up_3____columns": {
      "width": "33.33333%",
      "float": "left"
    },
    "medium_up_3____column_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_3____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_3____column_nth_of_type_3n_1": {
      "clear": "both"
    },
    "medium_up_3____columns_nth_of_type_3n_1": {
      "clear": "both"
    },
    "medium_up_3____column_last_child": {
      "float": "left"
    },
    "medium_up_3____columns_last_child": {
      "float": "left"
    },
    "medium_up_4____column": {
      "width": "25%",
      "float": "left"
    },
    "medium_up_4____columns": {
      "width": "25%",
      "float": "left"
    },
    "medium_up_4____column_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_4____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_4____column_nth_of_type_4n_1": {
      "clear": "both"
    },
    "medium_up_4____columns_nth_of_type_4n_1": {
      "clear": "both"
    },
    "medium_up_4____column_last_child": {
      "float": "left"
    },
    "medium_up_4____columns_last_child": {
      "float": "left"
    },
    "medium_up_5____column": {
      "width": "20%",
      "float": "left"
    },
    "medium_up_5____columns": {
      "width": "20%",
      "float": "left"
    },
    "medium_up_5____column_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_5____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_5____column_nth_of_type_5n_1": {
      "clear": "both"
    },
    "medium_up_5____columns_nth_of_type_5n_1": {
      "clear": "both"
    },
    "medium_up_5____column_last_child": {
      "float": "left"
    },
    "medium_up_5____columns_last_child": {
      "float": "left"
    },
    "medium_up_6____column": {
      "width": "16.66667%",
      "float": "left"
    },
    "medium_up_6____columns": {
      "width": "16.66667%",
      "float": "left"
    },
    "medium_up_6____column_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_6____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_6____column_nth_of_type_6n_1": {
      "clear": "both"
    },
    "medium_up_6____columns_nth_of_type_6n_1": {
      "clear": "both"
    },
    "medium_up_6____column_last_child": {
      "float": "left"
    },
    "medium_up_6____columns_last_child": {
      "float": "left"
    },
    "medium_up_7____column": {
      "width": "14.28571%",
      "float": "left"
    },
    "medium_up_7____columns": {
      "width": "14.28571%",
      "float": "left"
    },
    "medium_up_7____column_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_7____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_7____column_nth_of_type_7n_1": {
      "clear": "both"
    },
    "medium_up_7____columns_nth_of_type_7n_1": {
      "clear": "both"
    },
    "medium_up_7____column_last_child": {
      "float": "left"
    },
    "medium_up_7____columns_last_child": {
      "float": "left"
    },
    "medium_up_8____column": {
      "width": "12.5%",
      "float": "left"
    },
    "medium_up_8____columns": {
      "width": "12.5%",
      "float": "left"
    },
    "medium_up_8____column_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_8____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "medium_up_8____column_nth_of_type_8n_1": {
      "clear": "both"
    },
    "medium_up_8____columns_nth_of_type_8n_1": {
      "clear": "both"
    },
    "medium_up_8____column_last_child": {
      "float": "left"
    },
    "medium_up_8____columns_last_child": {
      "float": "left"
    },
    "medium_collapse____column": {
      "paddingLeft": "0",
      "paddingRight": "0"
    },
    "medium_collapse____columns": {
      "paddingLeft": "0",
      "paddingRight": "0"
    },
    "medium_uncollapse____column": {
      "paddingLeft": "0.9375rem",
      "paddingRight": "0.9375rem"
    },
    "medium_uncollapse____columns": {
      "paddingLeft": "0.9375rem",
      "paddingRight": "0.9375rem"
    },
    "medium_centered": {
      "float": "none",
      "marginLeft": "auto",
      "marginRight": "auto"
    },
    "medium_uncentered": {
      "position": "static",
      "marginLeft": "0",
      "marginRight": "0"
    },
    "medium_push_0": {
      "position": "static",
      "marginLeft": "0",
      "marginRight": "0"
    },
    "medium_pull_0": {
      "position": "static",
      "marginLeft": "0",
      "marginRight": "0"
    },
    "h1": {
      "fontSize": "3rem"
    },
    "h2": {
      "fontSize": "2.5rem"
    },
    "h3": {
      "fontSize": "1.9375rem"
    },
    "h4": {
      "fontSize": "1.5625rem"
    },
    "h5": {
      "fontSize": "1.25rem"
    },
    "h6": {
      "fontSize": "1rem"
    },
    "medium_text_left": {
      "textAlign": "left"
    },
    "medium_text_right": {
      "textAlign": "right"
    },
    "medium_text_center": {
      "textAlign": "center"
    },
    "medium_text_justify": {
      "textAlign": "justify"
    },
    "hide_for_medium": {
      "display": "none !important"
    },
    "button_group_stacked_for_small__button": {
      "width": "auto"
    },
    "button_group_stacked_for_small__button_not__last_child": {
      "borderRight": "1px solid #fefefe"
    },
    "menu_medium_horizontal___li": {
      "display": "table-cell"
    },
    "menu_medium_vertical___li": {
      "display": "block"
    },
    "position_left_reveal_for_medium": {
      "left": "0",
      "zIndex": "auto",
      "position": "fixed"
    },
    "position_left_reveal_for_medium____off_canvas_content": {
      "marginLeft": "250px"
    },
    "position_right_reveal_for_medium": {
      "right": "0",
      "zIndex": "auto",
      "position": "fixed"
    },
    "position_right_reveal_for_medium____off_canvas_content": {
      "marginRight": "250px"
    },
    "pagination_li": {
      "display": "inline-block"
    },
    "reveal": {
      "width": "600px",
      "maxWidth": "75rem"
    },
    "reveal__reveal": {
      "left": "auto",
      "right": "auto",
      "margin": "0 auto"
    },
    "reveal_tiny": {
      "width": "30%",
      "maxWidth": "75rem"
    },
    "reveal_small": {
      "width": "50%",
      "maxWidth": "75rem"
    },
    "reveal_large": {
      "width": "90%",
      "maxWidth": "75rem"
    }
  },
  "row__row_collapse": {
    "marginLeft": "0",
    "marginRight": "0"
  },
  "row_expanded": {
    "maxWidth": "none"
  },
  "column": {
    "paddingLeft": "0.625rem",
    "paddingRight": "0.625rem",
    "width": "100%",
    "float": "left"
  },
  "columns": {
    "paddingLeft": "0.625rem",
    "paddingRight": "0.625rem",
    "width": "100%",
    "float": "left"
  },
  "column_last_child_not__first_child": {
    "float": "right"
  },
  "columns_last_child_not__first_child": {
    "float": "right"
  },
  "column_end_last_child_last_child": {
    "float": "left"
  },
  "end_columns_last_child_last_child": {
    "float": "left"
  },
  "column_row_row": {
    "float": "none"
  },
  "row_row_columns": {
    "float": "none"
  },
  "row__column_row_row": {
    "paddingLeft": "0",
    "paddingRight": "0",
    "marginLeft": "0",
    "marginRight": "0"
  },
  "row__row_row_columns": {
    "paddingLeft": "0",
    "paddingRight": "0",
    "marginLeft": "0",
    "marginRight": "0"
  },
  "small_1": {
    "width": "8.33333%"
  },
  "small_push_1": {
    "position": "relative",
    "left": "8.33333%"
  },
  "small_pull_1": {
    "position": "relative",
    "left": "-8.33333%"
  },
  "small_offset_0": {
    "marginLeft": "0%"
  },
  "small_2": {
    "width": "16.66667%"
  },
  "small_push_2": {
    "position": "relative",
    "left": "16.66667%"
  },
  "small_pull_2": {
    "position": "relative",
    "left": "-16.66667%"
  },
  "small_offset_1": {
    "marginLeft": "8.33333%"
  },
  "small_3": {
    "width": "25%"
  },
  "small_push_3": {
    "position": "relative",
    "left": "25%"
  },
  "small_pull_3": {
    "position": "relative",
    "left": "-25%"
  },
  "small_offset_2": {
    "marginLeft": "16.66667%"
  },
  "small_4": {
    "width": "33.33333%"
  },
  "small_push_4": {
    "position": "relative",
    "left": "33.33333%"
  },
  "small_pull_4": {
    "position": "relative",
    "left": "-33.33333%"
  },
  "small_offset_3": {
    "marginLeft": "25%"
  },
  "small_5": {
    "width": "41.66667%"
  },
  "small_push_5": {
    "position": "relative",
    "left": "41.66667%"
  },
  "small_pull_5": {
    "position": "relative",
    "left": "-41.66667%"
  },
  "small_offset_4": {
    "marginLeft": "33.33333%"
  },
  "small_6": {
    "width": "50%"
  },
  "small_push_6": {
    "position": "relative",
    "left": "50%"
  },
  "small_pull_6": {
    "position": "relative",
    "left": "-50%"
  },
  "small_offset_5": {
    "marginLeft": "41.66667%"
  },
  "small_7": {
    "width": "58.33333%"
  },
  "small_push_7": {
    "position": "relative",
    "left": "58.33333%"
  },
  "small_pull_7": {
    "position": "relative",
    "left": "-58.33333%"
  },
  "small_offset_6": {
    "marginLeft": "50%"
  },
  "small_8": {
    "width": "66.66667%"
  },
  "small_push_8": {
    "position": "relative",
    "left": "66.66667%"
  },
  "small_pull_8": {
    "position": "relative",
    "left": "-66.66667%"
  },
  "small_offset_7": {
    "marginLeft": "58.33333%"
  },
  "small_9": {
    "width": "75%"
  },
  "small_push_9": {
    "position": "relative",
    "left": "75%"
  },
  "small_pull_9": {
    "position": "relative",
    "left": "-75%"
  },
  "small_offset_8": {
    "marginLeft": "66.66667%"
  },
  "small_10": {
    "width": "83.33333%"
  },
  "small_push_10": {
    "position": "relative",
    "left": "83.33333%"
  },
  "small_pull_10": {
    "position": "relative",
    "left": "-83.33333%"
  },
  "small_offset_9": {
    "marginLeft": "75%"
  },
  "small_11": {
    "width": "91.66667%"
  },
  "small_push_11": {
    "position": "relative",
    "left": "91.66667%"
  },
  "small_pull_11": {
    "position": "relative",
    "left": "-91.66667%"
  },
  "small_offset_10": {
    "marginLeft": "83.33333%"
  },
  "small_12": {
    "width": "100%"
  },
  "small_offset_11": {
    "marginLeft": "91.66667%"
  },
  "small_up_1____column": {
    "width": "100%",
    "float": "left"
  },
  "small_up_1____columns": {
    "width": "100%",
    "float": "left"
  },
  "small_up_1____column_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_1____columns_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_1____column_nth_of_type_1n_1": {
    "clear": "both"
  },
  "small_up_1____columns_nth_of_type_1n_1": {
    "clear": "both"
  },
  "small_up_1____column_last_child": {
    "float": "left"
  },
  "small_up_1____columns_last_child": {
    "float": "left"
  },
  "small_up_2____column": {
    "width": "50%",
    "float": "left"
  },
  "small_up_2____columns": {
    "width": "50%",
    "float": "left"
  },
  "small_up_2____column_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_2____columns_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_2____column_nth_of_type_2n_1": {
    "clear": "both"
  },
  "small_up_2____columns_nth_of_type_2n_1": {
    "clear": "both"
  },
  "small_up_2____column_last_child": {
    "float": "left"
  },
  "small_up_2____columns_last_child": {
    "float": "left"
  },
  "small_up_3____column": {
    "width": "33.33333%",
    "float": "left"
  },
  "small_up_3____columns": {
    "width": "33.33333%",
    "float": "left"
  },
  "small_up_3____column_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_3____columns_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_3____column_nth_of_type_3n_1": {
    "clear": "both"
  },
  "small_up_3____columns_nth_of_type_3n_1": {
    "clear": "both"
  },
  "small_up_3____column_last_child": {
    "float": "left"
  },
  "small_up_3____columns_last_child": {
    "float": "left"
  },
  "small_up_4____column": {
    "width": "25%",
    "float": "left"
  },
  "small_up_4____columns": {
    "width": "25%",
    "float": "left"
  },
  "small_up_4____column_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_4____columns_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_4____column_nth_of_type_4n_1": {
    "clear": "both"
  },
  "small_up_4____columns_nth_of_type_4n_1": {
    "clear": "both"
  },
  "small_up_4____column_last_child": {
    "float": "left"
  },
  "small_up_4____columns_last_child": {
    "float": "left"
  },
  "small_up_5____column": {
    "width": "20%",
    "float": "left"
  },
  "small_up_5____columns": {
    "width": "20%",
    "float": "left"
  },
  "small_up_5____column_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_5____columns_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_5____column_nth_of_type_5n_1": {
    "clear": "both"
  },
  "small_up_5____columns_nth_of_type_5n_1": {
    "clear": "both"
  },
  "small_up_5____column_last_child": {
    "float": "left"
  },
  "small_up_5____columns_last_child": {
    "float": "left"
  },
  "small_up_6____column": {
    "width": "16.66667%",
    "float": "left"
  },
  "small_up_6____columns": {
    "width": "16.66667%",
    "float": "left"
  },
  "small_up_6____column_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_6____columns_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_6____column_nth_of_type_6n_1": {
    "clear": "both"
  },
  "small_up_6____columns_nth_of_type_6n_1": {
    "clear": "both"
  },
  "small_up_6____column_last_child": {
    "float": "left"
  },
  "small_up_6____columns_last_child": {
    "float": "left"
  },
  "small_up_7____column": {
    "width": "14.28571%",
    "float": "left"
  },
  "small_up_7____columns": {
    "width": "14.28571%",
    "float": "left"
  },
  "small_up_7____column_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_7____columns_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_7____column_nth_of_type_7n_1": {
    "clear": "both"
  },
  "small_up_7____columns_nth_of_type_7n_1": {
    "clear": "both"
  },
  "small_up_7____column_last_child": {
    "float": "left"
  },
  "small_up_7____columns_last_child": {
    "float": "left"
  },
  "small_up_8____column": {
    "width": "12.5%",
    "float": "left"
  },
  "small_up_8____columns": {
    "width": "12.5%",
    "float": "left"
  },
  "small_up_8____column_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_8____columns_nth_of_type_1n": {
    "clear": "none"
  },
  "small_up_8____column_nth_of_type_8n_1": {
    "clear": "both"
  },
  "small_up_8____columns_nth_of_type_8n_1": {
    "clear": "both"
  },
  "small_up_8____column_last_child": {
    "float": "left"
  },
  "small_up_8____columns_last_child": {
    "float": "left"
  },
  "small_collapse____column": {
    "paddingLeft": "0",
    "paddingRight": "0"
  },
  "small_collapse____columns": {
    "paddingLeft": "0",
    "paddingRight": "0"
  },
  "small_uncollapse____column": {
    "paddingLeft": "0.625rem",
    "paddingRight": "0.625rem"
  },
  "small_uncollapse____columns": {
    "paddingLeft": "0.625rem",
    "paddingRight": "0.625rem"
  },
  "small_centered": {
    "float": "none",
    "marginLeft": "auto",
    "marginRight": "auto"
  },
  "small_uncentered": {
    "position": "static",
    "marginLeft": "0",
    "marginRight": "0"
  },
  "small_push_0": {
    "position": "static",
    "marginLeft": "0",
    "marginRight": "0"
  },
  "small_pull_0": {
    "position": "static",
    "marginLeft": "0",
    "marginRight": "0"
  },
  "@media screen and (min-width: 64em)": {
    "__expression__": "screen and (min-width: 64em)",
    "large_1": {
      "width": "8.33333%"
    },
    "large_push_1": {
      "position": "relative",
      "left": "8.33333%"
    },
    "large_pull_1": {
      "position": "relative",
      "left": "-8.33333%"
    },
    "large_offset_0": {
      "marginLeft": "0%"
    },
    "large_2": {
      "width": "16.66667%"
    },
    "large_push_2": {
      "position": "relative",
      "left": "16.66667%"
    },
    "large_pull_2": {
      "position": "relative",
      "left": "-16.66667%"
    },
    "large_offset_1": {
      "marginLeft": "8.33333%"
    },
    "large_3": {
      "width": "25%"
    },
    "large_push_3": {
      "position": "relative",
      "left": "25%"
    },
    "large_pull_3": {
      "position": "relative",
      "left": "-25%"
    },
    "large_offset_2": {
      "marginLeft": "16.66667%"
    },
    "large_4": {
      "width": "33.33333%"
    },
    "large_push_4": {
      "position": "relative",
      "left": "33.33333%"
    },
    "large_pull_4": {
      "position": "relative",
      "left": "-33.33333%"
    },
    "large_offset_3": {
      "marginLeft": "25%"
    },
    "large_5": {
      "width": "41.66667%"
    },
    "large_push_5": {
      "position": "relative",
      "left": "41.66667%"
    },
    "large_pull_5": {
      "position": "relative",
      "left": "-41.66667%"
    },
    "large_offset_4": {
      "marginLeft": "33.33333%"
    },
    "large_6": {
      "width": "50%"
    },
    "large_push_6": {
      "position": "relative",
      "left": "50%"
    },
    "large_pull_6": {
      "position": "relative",
      "left": "-50%"
    },
    "large_offset_5": {
      "marginLeft": "41.66667%"
    },
    "large_7": {
      "width": "58.33333%"
    },
    "large_push_7": {
      "position": "relative",
      "left": "58.33333%"
    },
    "large_pull_7": {
      "position": "relative",
      "left": "-58.33333%"
    },
    "large_offset_6": {
      "marginLeft": "50%"
    },
    "large_8": {
      "width": "66.66667%"
    },
    "large_push_8": {
      "position": "relative",
      "left": "66.66667%"
    },
    "large_pull_8": {
      "position": "relative",
      "left": "-66.66667%"
    },
    "large_offset_7": {
      "marginLeft": "58.33333%"
    },
    "large_9": {
      "width": "75%"
    },
    "large_push_9": {
      "position": "relative",
      "left": "75%"
    },
    "large_pull_9": {
      "position": "relative",
      "left": "-75%"
    },
    "large_offset_8": {
      "marginLeft": "66.66667%"
    },
    "large_10": {
      "width": "83.33333%"
    },
    "large_push_10": {
      "position": "relative",
      "left": "83.33333%"
    },
    "large_pull_10": {
      "position": "relative",
      "left": "-83.33333%"
    },
    "large_offset_9": {
      "marginLeft": "75%"
    },
    "large_11": {
      "width": "91.66667%"
    },
    "large_push_11": {
      "position": "relative",
      "left": "91.66667%"
    },
    "large_pull_11": {
      "position": "relative",
      "left": "-91.66667%"
    },
    "large_offset_10": {
      "marginLeft": "83.33333%"
    },
    "large_12": {
      "width": "100%"
    },
    "large_offset_11": {
      "marginLeft": "91.66667%"
    },
    "large_up_1____column": {
      "width": "100%",
      "float": "left"
    },
    "large_up_1____columns": {
      "width": "100%",
      "float": "left"
    },
    "large_up_1____column_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_1____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_1____column_nth_of_type_1n_1": {
      "clear": "both"
    },
    "large_up_1____columns_nth_of_type_1n_1": {
      "clear": "both"
    },
    "large_up_1____column_last_child": {
      "float": "left"
    },
    "large_up_1____columns_last_child": {
      "float": "left"
    },
    "large_up_2____column": {
      "width": "50%",
      "float": "left"
    },
    "large_up_2____columns": {
      "width": "50%",
      "float": "left"
    },
    "large_up_2____column_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_2____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_2____column_nth_of_type_2n_1": {
      "clear": "both"
    },
    "large_up_2____columns_nth_of_type_2n_1": {
      "clear": "both"
    },
    "large_up_2____column_last_child": {
      "float": "left"
    },
    "large_up_2____columns_last_child": {
      "float": "left"
    },
    "large_up_3____column": {
      "width": "33.33333%",
      "float": "left"
    },
    "large_up_3____columns": {
      "width": "33.33333%",
      "float": "left"
    },
    "large_up_3____column_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_3____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_3____column_nth_of_type_3n_1": {
      "clear": "both"
    },
    "large_up_3____columns_nth_of_type_3n_1": {
      "clear": "both"
    },
    "large_up_3____column_last_child": {
      "float": "left"
    },
    "large_up_3____columns_last_child": {
      "float": "left"
    },
    "large_up_4____column": {
      "width": "25%",
      "float": "left"
    },
    "large_up_4____columns": {
      "width": "25%",
      "float": "left"
    },
    "large_up_4____column_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_4____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_4____column_nth_of_type_4n_1": {
      "clear": "both"
    },
    "large_up_4____columns_nth_of_type_4n_1": {
      "clear": "both"
    },
    "large_up_4____column_last_child": {
      "float": "left"
    },
    "large_up_4____columns_last_child": {
      "float": "left"
    },
    "large_up_5____column": {
      "width": "20%",
      "float": "left"
    },
    "large_up_5____columns": {
      "width": "20%",
      "float": "left"
    },
    "large_up_5____column_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_5____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_5____column_nth_of_type_5n_1": {
      "clear": "both"
    },
    "large_up_5____columns_nth_of_type_5n_1": {
      "clear": "both"
    },
    "large_up_5____column_last_child": {
      "float": "left"
    },
    "large_up_5____columns_last_child": {
      "float": "left"
    },
    "large_up_6____column": {
      "width": "16.66667%",
      "float": "left"
    },
    "large_up_6____columns": {
      "width": "16.66667%",
      "float": "left"
    },
    "large_up_6____column_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_6____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_6____column_nth_of_type_6n_1": {
      "clear": "both"
    },
    "large_up_6____columns_nth_of_type_6n_1": {
      "clear": "both"
    },
    "large_up_6____column_last_child": {
      "float": "left"
    },
    "large_up_6____columns_last_child": {
      "float": "left"
    },
    "large_up_7____column": {
      "width": "14.28571%",
      "float": "left"
    },
    "large_up_7____columns": {
      "width": "14.28571%",
      "float": "left"
    },
    "large_up_7____column_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_7____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_7____column_nth_of_type_7n_1": {
      "clear": "both"
    },
    "large_up_7____columns_nth_of_type_7n_1": {
      "clear": "both"
    },
    "large_up_7____column_last_child": {
      "float": "left"
    },
    "large_up_7____columns_last_child": {
      "float": "left"
    },
    "large_up_8____column": {
      "width": "12.5%",
      "float": "left"
    },
    "large_up_8____columns": {
      "width": "12.5%",
      "float": "left"
    },
    "large_up_8____column_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_8____columns_nth_of_type_1n": {
      "clear": "none"
    },
    "large_up_8____column_nth_of_type_8n_1": {
      "clear": "both"
    },
    "large_up_8____columns_nth_of_type_8n_1": {
      "clear": "both"
    },
    "large_up_8____column_last_child": {
      "float": "left"
    },
    "large_up_8____columns_last_child": {
      "float": "left"
    },
    "large_collapse____column": {
      "paddingLeft": "0",
      "paddingRight": "0"
    },
    "large_collapse____columns": {
      "paddingLeft": "0",
      "paddingRight": "0"
    },
    "large_uncollapse____column": {
      "paddingLeft": "0.9375rem",
      "paddingRight": "0.9375rem"
    },
    "large_uncollapse____columns": {
      "paddingLeft": "0.9375rem",
      "paddingRight": "0.9375rem"
    },
    "large_centered": {
      "float": "none",
      "marginLeft": "auto",
      "marginRight": "auto"
    },
    "large_uncentered": {
      "position": "static",
      "marginLeft": "0",
      "marginRight": "0"
    },
    "large_push_0": {
      "position": "static",
      "marginLeft": "0",
      "marginRight": "0"
    },
    "large_pull_0": {
      "position": "static",
      "marginLeft": "0",
      "marginRight": "0"
    },
    "large_text_left": {
      "textAlign": "left"
    },
    "large_text_right": {
      "textAlign": "right"
    },
    "large_text_center": {
      "textAlign": "center"
    },
    "large_text_justify": {
      "textAlign": "justify"
    },
    "hide_for_large": {
      "display": "none !important"
    },
    "menu_large_horizontal___li": {
      "display": "table-cell"
    },
    "menu_large_vertical___li": {
      "display": "block"
    },
    "position_left_reveal_for_large": {
      "left": "0",
      "zIndex": "auto",
      "position": "fixed"
    },
    "position_left_reveal_for_large____off_canvas_content": {
      "marginLeft": "250px"
    },
    "position_right_reveal_for_large": {
      "right": "0",
      "zIndex": "auto",
      "position": "fixed"
    },
    "position_right_reveal_for_large____off_canvas_content": {
      "marginRight": "250px"
    }
  },
  "div": {
    "margin": "0",
    "padding": "0"
  },
  "dl": {
    "marginBottom": "1rem"
  },
  "dt": {
    "margin": "0",
    "padding": "0"
  },
  "dd": {
    "margin": "0",
    "padding": "0"
  },
  "ul": {
    "listStyleType": "disc",
    "marginLeft": "1.25rem"
  },
  "ol": {
    "marginLeft": "1.25rem"
  },
  "li": {
    "fontSize": "inherit"
  },
  "h2": {
    "fontSize": "1.25rem"
  },
  "h3": {
    "fontSize": "1.1875rem"
  },
  "h4": {
    "fontSize": "1.125rem"
  },
  "h5": {
    "fontSize": "1.0625rem"
  },
  "h6": {
    "fontSize": "1rem"
  },
  "form": {
    "margin": "0",
    "padding": "0"
  },
  "p": {
    "fontSize": "inherit",
    "lineHeight": "1.6",
    "marginBottom": "1rem",
    "textRendering": "optimizeLegibility"
  },
  "blockquote": {
    "lineHeight": "1.6",
    "color": "#8a8a8a"
  },
  "em": {
    "fontStyle": "italic",
    "lineHeight": "inherit"
  },
  "i": {
    "fontStyle": "italic",
    "lineHeight": "inherit"
  },
  "h1_small": {
    "color": "#cacaca",
    "lineHeight": "0"
  },
  "h2_small": {
    "color": "#cacaca",
    "lineHeight": "0"
  },
  "h3_small": {
    "color": "#cacaca",
    "lineHeight": "0"
  },
  "h4_small": {
    "color": "#cacaca",
    "lineHeight": "0"
  },
  "h5_small": {
    "color": "#cacaca",
    "lineHeight": "0"
  },
  "h6_small": {
    "color": "#cacaca",
    "lineHeight": "0"
  },
  "a_focus": {
    "color": "#1585cf"
  },
  "a_img": {
    "border": "0"
  },
  "ul_ul": {
    "marginLeft": "1.25rem",
    "marginBottom": "0"
  },
  "ol_ul": {
    "marginLeft": "1.25rem",
    "marginBottom": "0"
  },
  "ul_ol": {
    "marginLeft": "1.25rem",
    "marginBottom": "0"
  },
  "ol_ol": {
    "marginLeft": "1.25rem",
    "marginBottom": "0"
  },
  "dl_dt": {
    "marginBottom": "0.3rem",
    "fontWeight": "bold"
  },
  "blockquote_p": {
    "lineHeight": "1.6",
    "color": "#8a8a8a"
  },
  "cite": {
    "display": "block",
    "fontSize": "0.8125rem",
    "color": "#8a8a8a"
  },
  "cite_before": {
    "content": "'\\2014 \\0020'"
  },
  "abbr": {
    "color": "#0a0a0a",
    "cursor": "help",
    "borderBottom": "1px dotted #0a0a0a"
  },
  "subheader": {
    "marginTop": "0.2rem",
    "marginBottom": "0.5rem",
    "fontWeight": "normal",
    "lineHeight": "1.4",
    "color": "#8a8a8a"
  },
  "lead": {
    "fontSize": "125%",
    "lineHeight": "1.6"
  },
  "stat": {
    "fontSize": "2.5rem",
    "lineHeight": "1"
  },
  "p____stat": {
    "marginTop": "-1rem"
  },
  "no_bullet": {
    "marginLeft": "0",
    "listStyle": "none"
  },
  "text_left": {
    "textAlign": "left"
  },
  "text_right": {
    "textAlign": "right"
  },
  "text_center": {
    "textAlign": "center"
  },
  "text_justify": {
    "textAlign": "justify"
  },
  "show_for_print": {
    "display": "none !important"
  },
  "@media print": {
    "__expression__": "print",
    "": {
      "background": "transparent !important",
      "color": "black !important",
      "boxShadow": "none !important",
      "textShadow": "none !important"
    },
    "show_for_print": {
      "display": "block !important"
    },
    "hide_for_print": {
      "display": "none !important"
    },
    "table_show_for_print": {
      "display": "table !important"
    },
    "thead_show_for_print": {
      "display": "table-header-group !important"
    },
    "tbody_show_for_print": {
      "display": "table-row-group !important"
    },
    "tr_show_for_print": {
      "display": "table-row !important"
    },
    "td_show_for_print": {
      "display": "table-cell !important"
    },
    "th_show_for_print": {
      "display": "table-cell !important"
    },
    "a": {
      "textDecoration": "underline"
    },
    "a_visited": {
      "textDecoration": "underline"
    },
    "a_href__after": {
      "content": "\" (\" attr(href) \")\""
    },
    "ir_a_after": {
      "content": "''"
    },
    "a_href___javascript____after": {
      "content": "''"
    },
    "a_href_______after": {
      "content": "''"
    },
    "abbr_title__after": {
      "content": "\" (\" attr(title) \")\""
    },
    "pre": {
      "border": "1px solid #999",
      "pageBreakInside": "avoid"
    },
    "blockquote": {
      "border": "1px solid #999",
      "pageBreakInside": "avoid"
    },
    "thead": {
      "display": "table-header-group"
    },
    "tr": {
      "pageBreakInside": "avoid"
    },
    "img": {
      "maxWidth": "100% !important"
    },
    "p": {
      "orphans": "3",
      "widows": "3"
    },
    "h2": {
      "pageBreakAfter": "avoid"
    },
    "h3": {
      "pageBreakAfter": "avoid"
    }
  },
  "data_whatinput__mouse____button": {
    "outline": "0"
  },
  "button_hover": {
    "backgroundColor": "#1583cc",
    "color": "#fff"
  },
  "button_focus": {
    "backgroundColor": "#1583cc",
    "color": "#fff"
  },
  "button_tiny": {
    "fontSize": "0.6rem"
  },
  "button_small": {
    "fontSize": "0.75rem"
  },
  "button_large": {
    "fontSize": "1.25rem"
  },
  "button_expanded": {
    "display": "block",
    "width": "100%",
    "marginLeft": "0",
    "marginRight": "0"
  },
  "button_primary": {
    "backgroundColor": "#2199e8",
    "color": "#fff"
  },
  "button_primary_hover": {
    "backgroundColor": "#147cc0",
    "color": "#fff"
  },
  "button_primary_focus": {
    "backgroundColor": "#147cc0",
    "color": "#fff"
  },
  "button_secondary": {
    "backgroundColor": "#777",
    "color": "#fff"
  },
  "button_secondary_hover": {
    "backgroundColor": "#5f5f5f",
    "color": "#fff"
  },
  "button_secondary_focus": {
    "backgroundColor": "#5f5f5f",
    "color": "#fff"
  },
  "button_success": {
    "backgroundColor": "#3adb76",
    "color": "#fff"
  },
  "button_success_hover": {
    "backgroundColor": "#22bb5b",
    "color": "#fff"
  },
  "button_success_focus": {
    "backgroundColor": "#22bb5b",
    "color": "#fff"
  },
  "button_alert": {
    "backgroundColor": "#ec5840",
    "color": "#fff"
  },
  "button_alert_hover": {
    "backgroundColor": "#da3116",
    "color": "#fff"
  },
  "button_alert_focus": {
    "backgroundColor": "#da3116",
    "color": "#fff"
  },
  "button_warning": {
    "backgroundColor": "#ffae00",
    "color": "#fff"
  },
  "button_warning_hover": {
    "backgroundColor": "#cc8b00",
    "color": "#fff"
  },
  "button_warning_focus": {
    "backgroundColor": "#cc8b00",
    "color": "#fff"
  },
  "button_hollow": {
    "backgroundColor": "transparent"
  },
  "button_hollow_hover": {
    "borderColor": "#0c4d78",
    "color": "#0c4d78"
  },
  "button_hollow_focus": {
    "borderColor": "#0c4d78",
    "color": "#0c4d78"
  },
  "button_hollow_primary": {
    "border": "1px solid #2199e8",
    "color": "#2199e8"
  },
  "button_hollow_primary_hover": {
    "borderColor": "#0c4d78",
    "color": "#0c4d78"
  },
  "button_hollow_primary_focus": {
    "borderColor": "#0c4d78",
    "color": "#0c4d78"
  },
  "button_hollow_secondary": {
    "border": "1px solid #777",
    "color": "#777"
  },
  "button_hollow_secondary_hover": {
    "borderColor": "#3c3c3c",
    "color": "#3c3c3c"
  },
  "button_hollow_secondary_focus": {
    "borderColor": "#3c3c3c",
    "color": "#3c3c3c"
  },
  "button_hollow_success": {
    "border": "1px solid #3adb76",
    "color": "#3adb76"
  },
  "button_hollow_success_hover": {
    "borderColor": "#157539",
    "color": "#157539"
  },
  "button_hollow_success_focus": {
    "borderColor": "#157539",
    "color": "#157539"
  },
  "button_hollow_alert": {
    "border": "1px solid #ec5840",
    "color": "#ec5840"
  },
  "button_hollow_alert_hover": {
    "borderColor": "#881f0e",
    "color": "#881f0e"
  },
  "button_hollow_alert_focus": {
    "borderColor": "#881f0e",
    "color": "#881f0e"
  },
  "button_hollow_warning": {
    "border": "1px solid #ffae00",
    "color": "#ffae00"
  },
  "button_hollow_warning_hover": {
    "borderColor": "#805700",
    "color": "#805700"
  },
  "button_hollow_warning_focus": {
    "borderColor": "#805700",
    "color": "#805700"
  },
  "button_dropdown__after": {
    "content": "''",
    "display": "inline-block",
    "width": "0",
    "height": "0",
    "border": "inset 0.4em",
    "borderColor": "#fefefe transparent transparent",
    "borderTopStyle": "solid",
    "position": "relative",
    "top": "0.4em",
    "float": "right",
    "marginLeft": "1em"
  },
  "button_arrow_only__after": {
    "marginLeft": "0",
    "float": "none",
    "top": "0.2em"
  },
  "type__text": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__password": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__date": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__datetime": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__datetime_local": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__month": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__week": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__email": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__number": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__search": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__tel": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__time": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__url": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__color": {
    "display": "block",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "2.4375rem",
    "padding": "0.5rem",
    "border": "1px solid #cacaca",
    "margin": "0 0 1rem",
    "fontFamily": "inherit",
    "fontSize": "1rem",
    "color": "#0a0a0a",
    "backgroundColor": "#fefefe",
    "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
    "borderRadius": "0",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__text___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__password___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__date___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__datetime___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__datetime_local___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__month___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__week___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__email___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__number___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__search___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__tel___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__time___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__url___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "type__color___focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "textarea_focus": {
    "border": "1px solid #8a8a8a",
    "backgroundColor": "#fefefe",
    "outline": "none",
    "boxShadow": "0 0 5px #cacaca",
    "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out"
  },
  "textarea_rows": {
    "height": "auto"
  },
  "input_disabled": {
    "backgroundColor": "#e6e6e6",
    "cursor": "default"
  },
  "input_readonly": {
    "backgroundColor": "#e6e6e6",
    "cursor": "default"
  },
  "textarea_disabled": {
    "backgroundColor": "#e6e6e6",
    "cursor": "default"
  },
  "textarea_readonly": {
    "backgroundColor": "#e6e6e6",
    "cursor": "default"
  },
  "type__submit": {
    "borderRadius": "0",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__button": {
    "borderRadius": "0",
    "WebkitAppearance": "none",
    "MozAppearance": "none"
  },
  "type__file": {
    "width": "100%"
  },
  "type__checkbox": {
    "margin": "0 0 1rem"
  },
  "type__radio": {
    "margin": "0 0 1rem"
  },
  "type__checkbox_____label": {
    "display": "inline-block",
    "marginLeft": "0.5rem",
    "marginRight": "1rem",
    "marginBottom": "0",
    "verticalAlign": "baseline"
  },
  "type__radio_____label": {
    "display": "inline-block",
    "marginLeft": "0.5rem",
    "marginRight": "1rem",
    "marginBottom": "0",
    "verticalAlign": "baseline"
  },
  "label____type__checkbox": {
    "marginRight": "0.5rem"
  },
  "label____type__label": {
    "marginRight": "0.5rem"
  },
  "label": {
    "display": "inline-block",
    "padding": "0.33333rem 0.5rem",
    "fontSize": "0.8rem",
    "lineHeight": "1",
    "whiteSpace": "nowrap",
    "cursor": "default",
    "borderRadius": "0",
    "background": "#2199e8",
    "color": "#fefefe"
  },
  "label_middle": {
    "margin": "0 0 1rem",
    "padding": "0.5625rem 0"
  },
  "help_text": {
    "marginTop": "-0.5rem",
    "fontSize": "0.8125rem",
    "fontStyle": "italic",
    "color": "#333"
  },
  "input_group": {
    "display": "table",
    "width": "100%",
    "marginBottom": "1rem"
  },
  "input_group____first_child": {
    "borderRadius": "0 0 0 0"
  },
  "input_group____last_child": {
    "borderRadius": "0 0 0 0"
  },
  "input_group_label": {
    "textAlign": "center",
    "width": "1%",
    "height": "100%",
    "padding": "0 1rem",
    "background": "#e6e6e6",
    "color": "#0a0a0a",
    "border": "1px solid #cacaca"
  },
  "input_group_field": {
    "borderRadius": "0",
    "height": "2.5rem"
  },
  "input_group_button": {
    "height": "100%",
    "paddingTop": "0",
    "paddingBottom": "0",
    "textAlign": "center",
    "width": "1%"
  },
  "input_group_label_first_child": {
    "borderRight": "0"
  },
  "input_group_label_last_child": {
    "borderLeft": "0"
  },
  "input_group_button_a": {
    "margin": "0"
  },
  "input_group_button_input": {
    "margin": "0"
  },
  "input_group_button_button": {
    "margin": "0"
  },
  "fieldset_legend": {
    "background": "#fefefe",
    "padding": "0 0.1875rem",
    "margin": "0",
    "marginLeft": "-0.1875rem"
  },
  "@media screen and (min-width: 0\\0)": {
    "__expression__": "screen and (min-width: 0\\0)",
    "select": {
      "backgroundImage": "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==\")"
    }
  },
  "select_disabled": {
    "backgroundColor": "#e6e6e6",
    "cursor": "default"
  },
  "select___ms_expand": {
    "display": "none"
  },
  "select_multiple": {
    "height": "auto"
  },
  "is_invalid_input_not__focus": {
    "backgroundColor": "rgba(236, 88, 64, 0.1)",
    "borderColor": "#ec5840"
  },
  "is_invalid_label": {
    "color": "#ec5840"
  },
  "form_error": {
    "display": "none",
    "marginTop": "-0.5rem",
    "marginBottom": "1rem",
    "fontSize": "0.75rem",
    "fontWeight": "bold",
    "color": "#ec5840"
  },
  "form_error_is_visible": {
    "display": "block"
  },
  "hide": {
    "display": "none !important"
  },
  "invisible": {
    "visibility": "hidden"
  },
  "@media screen and (min-width: 0em) and (max-width: 39.9375em)": {
    "__expression__": "screen and (min-width: 0em) and (max-width: 39.9375em)",
    "hide_for_small_only": {
      "display": "none !important"
    },
    "media_object_stack_for_small__media_object_section": {
      "display": "block",
      "padding": "0",
      "paddingBottom": "1rem"
    },
    "media_object_stack_for_small__media_object_section_img": {
      "width": "100%"
    },
    "top_bar_right": {
      "width": "100%"
    },
    "top_bar_left": {
      "width": "100%"
    }
  },
  "@media screen and (max-width: 0em), screen and (min-width: 40em)": {
    "__expression__": "screen and (max-width: 0em), screen and (min-width: 40em)",
    "show_for_small_only": {
      "display": "none !important"
    }
  },
  "@media screen and (max-width: 39.9375em)": {
    "__expression__": "screen and (max-width: 39.9375em)",
    "show_for_medium": {
      "display": "none !important"
    },
    "stacked_for_small__top_bar_right": {
      "width": "100%"
    },
    "stacked_for_small__top_bar_left": {
      "width": "100%"
    }
  },
  "@media screen and (min-width: 40em) and (max-width: 63.9375em)": {
    "__expression__": "screen and (min-width: 40em) and (max-width: 63.9375em)",
    "hide_for_medium_only": {
      "display": "none !important"
    }
  },
  "@media screen and (max-width: 39.9375em), screen and (min-width: 64em)": {
    "__expression__": "screen and (max-width: 39.9375em), screen and (min-width: 64em)",
    "show_for_medium_only": {
      "display": "none !important"
    }
  },
  "@media screen and (max-width: 63.9375em)": {
    "__expression__": "screen and (max-width: 63.9375em)",
    "show_for_large": {
      "display": "none !important"
    },
    "table_stack_thead": {
      "display": "none"
    },
    "table_stack_tfoot": {
      "display": "none"
    },
    "table_stack_tr": {
      "display": "block"
    },
    "table_stack_th": {
      "display": "block"
    },
    "table_stack_td": {
      "borderTop": "0"
    },
    "stacked_for_medium__top_bar_right": {
      "width": "100%"
    },
    "stacked_for_medium__top_bar_left": {
      "width": "100%"
    }
  },
  "@media screen and (min-width: 64em) and (max-width: 74.9375em)": {
    "__expression__": "screen and (min-width: 64em) and (max-width: 74.9375em)",
    "hide_for_large_only": {
      "display": "none !important"
    }
  },
  "@media screen and (max-width: 63.9375em), screen and (min-width: 75em)": {
    "__expression__": "screen and (max-width: 63.9375em), screen and (min-width: 75em)",
    "show_for_large_only": {
      "display": "none !important"
    }
  },
  "show_for_sr": {
    "position": "absolute !important",
    "width": "1px",
    "height": "1px",
    "overflow": "hidden",
    "clip": "rect(0, 0, 0, 0)"
  },
  "show_on_focus": {
    "position": "absolute !important",
    "width": "1px",
    "height": "1px",
    "overflow": "hidden",
    "clip": "rect(0, 0, 0, 0)"
  },
  "show_on_focus_active": {
    "position": "static !important",
    "height": "auto",
    "width": "auto",
    "overflow": "visible",
    "clip": "auto"
  },
  "show_on_focus_focus": {
    "position": "static !important",
    "height": "auto",
    "width": "auto",
    "overflow": "visible",
    "clip": "auto"
  },
  "show_for_landscape": {
    "display": "block !important"
  },
  "hide_for_portrait": {
    "display": "block !important"
  },
  "@media screen and (orientation: landscape)": {
    "__expression__": "screen and (orientation: landscape)",
    "show_for_landscape": {
      "display": "block !important"
    },
    "hide_for_portrait": {
      "display": "block !important"
    },
    "hide_for_landscape": {
      "display": "none !important"
    },
    "show_for_portrait": {
      "display": "none !important"
    }
  },
  "@media screen and (orientation: portrait)": {
    "__expression__": "screen and (orientation: portrait)",
    "show_for_landscape": {
      "display": "none !important"
    },
    "hide_for_portrait": {
      "display": "none !important"
    },
    "hide_for_landscape": {
      "display": "block !important"
    },
    "show_for_portrait": {
      "display": "block !important"
    }
  },
  "hide_for_landscape": {
    "display": "none !important"
  },
  "show_for_portrait": {
    "display": "none !important"
  },
  "float_left": {
    "float": "left !important"
  },
  "float_right": {
    "float": "right !important"
  },
  "float_center": {
    "display": "block",
    "marginLeft": "auto",
    "marginRight": "auto"
  },
  "clearfix__before": {
    "content": "' '",
    "display": "table"
  },
  "clearfix__after": {
    "clear": "both"
  },
  "accordion": {
    "listStyleType": "none",
    "background": "#fefefe",
    "border": "1px solid #e6e6e6",
    "borderRadius": "0",
    "marginLeft": "0"
  },
  "accordion_title": {
    "display": "block",
    "padding": "1.25rem 1rem",
    "lineHeight": "1",
    "fontSize": "0.75rem",
    "color": "#2199e8",
    "position": "relative",
    "borderBottom": "1px solid #e6e6e6"
  },
  "accordion_title_hover": {
    "backgroundColor": "#e6e6e6"
  },
  "accordion_title_focus": {
    "backgroundColor": "#e6e6e6"
  },
  "last_child____accordion_title": {
    "borderBottomWidth": "0"
  },
  "accordion_title__before": {
    "content": "'+'",
    "position": "absolute",
    "right": "1rem",
    "top": "50%",
    "marginTop": "-0.5rem"
  },
  "is_active____accordion_title__before": {
    "content": "'–'"
  },
  "accordion_content": {
    "padding": "1rem",
    "display": "none",
    "borderBottom": "1px solid #e6e6e6",
    "backgroundColor": "#fefefe"
  },
  "badge": {
    "display": "inline-block",
    "padding": "0.3em",
    "minWidth": "2.1em",
    "fontSize": "0.6rem",
    "textAlign": "center",
    "borderRadius": "50%",
    "background": "#2199e8",
    "color": "#fefefe"
  },
  "badge_secondary": {
    "background": "#777",
    "color": "#fefefe"
  },
  "badge_success": {
    "background": "#3adb76",
    "color": "#fefefe"
  },
  "badge_alert": {
    "background": "#ec5840",
    "color": "#fefefe"
  },
  "badge_warning": {
    "background": "#ffae00",
    "color": "#fefefe"
  },
  "breadcrumbs": {
    "listStyle": "none",
    "margin": "0 0 1rem 0"
  },
  "breadcrumbs__before": {
    "content": "' '",
    "display": "table"
  },
  "breadcrumbs__after": {
    "clear": "both"
  },
  "breadcrumbs_li": {
    "float": "left",
    "color": "#0a0a0a",
    "fontSize": "0.6875rem",
    "cursor": "default",
    "textTransform": "uppercase"
  },
  "breadcrumbs_li_not__last_child___after": {
    "color": "#cacaca",
    "content": "\"/\"",
    "margin": "0 0.75rem",
    "position": "relative",
    "top": "1px",
    "opacity": "1"
  },
  "breadcrumbs_a": {
    "color": "#2199e8"
  },
  "breadcrumbs_a_hover": {
    "textDecoration": "underline"
  },
  "breadcrumbs__disabled": {
    "color": "#cacaca"
  },
  "button_group": {
    "marginBottom": "1rem",
    "fontSize": "0.9rem"
  },
  "button_group__before": {
    "content": "' '",
    "display": "table"
  },
  "button_group__after": {
    "clear": "both"
  },
  "button_group__button": {
    "float": "left",
    "margin": "0",
    "fontSize": "inherit"
  },
  "button_group__button_not__last_child": {
    "borderRight": "1px solid #fefefe"
  },
  "button_group_tiny": {
    "fontSize": "0.6rem"
  },
  "button_group_small": {
    "fontSize": "0.75rem"
  },
  "button_group_large": {
    "fontSize": "1.25rem"
  },
  "button_group_expanded": {
    "display": "table",
    "tableLayout": "fixed",
    "width": "100%"
  },
  "button_group_expanded__before": {
    "display": "none"
  },
  "button_group_expanded__after": {
    "display": "none"
  },
  "button_group_expanded__button": {
    "display": "table-cell",
    "float": "none"
  },
  "button_group_primary__button": {
    "backgroundColor": "#2199e8",
    "color": "#fff"
  },
  "button_group_primary__button_hover": {
    "backgroundColor": "#147cc0",
    "color": "#fff"
  },
  "button_group_primary__button_focus": {
    "backgroundColor": "#147cc0",
    "color": "#fff"
  },
  "button_group_secondary__button": {
    "backgroundColor": "#777",
    "color": "#fff"
  },
  "button_group_secondary__button_hover": {
    "backgroundColor": "#5f5f5f",
    "color": "#fff"
  },
  "button_group_secondary__button_focus": {
    "backgroundColor": "#5f5f5f",
    "color": "#fff"
  },
  "button_group_success__button": {
    "backgroundColor": "#3adb76",
    "color": "#fff"
  },
  "button_group_success__button_hover": {
    "backgroundColor": "#22bb5b",
    "color": "#fff"
  },
  "button_group_success__button_focus": {
    "backgroundColor": "#22bb5b",
    "color": "#fff"
  },
  "button_group_alert__button": {
    "backgroundColor": "#ec5840",
    "color": "#fff"
  },
  "button_group_alert__button_hover": {
    "backgroundColor": "#da3116",
    "color": "#fff"
  },
  "button_group_alert__button_focus": {
    "backgroundColor": "#da3116",
    "color": "#fff"
  },
  "button_group_warning__button": {
    "backgroundColor": "#ffae00",
    "color": "#fff"
  },
  "button_group_warning__button_hover": {
    "backgroundColor": "#cc8b00",
    "color": "#fff"
  },
  "button_group_warning__button_focus": {
    "backgroundColor": "#cc8b00",
    "color": "#fff"
  },
  "button_group_stacked__button": {
    "width": "100%"
  },
  "button_group_stacked_for_small__button": {
    "width": "100%"
  },
  "button_group_stacked__button_not__last_child": {
    "borderRight": "1px solid"
  },
  "button_group_stacked_for_small__button_not__last_child": {
    "borderRight": "1px solid"
  },
  "callout": {
    "margin": "0 0 1rem 0",
    "padding": "1rem",
    "border": "1px solid rgba(10, 10, 10, 0.25)",
    "borderRadius": "0",
    "position": "relative",
    "color": "#0a0a0a",
    "backgroundColor": "white"
  },
  "callout____first_child": {
    "marginTop": "0"
  },
  "callout____last_child": {
    "marginBottom": "0"
  },
  "callout_primary": {
    "backgroundColor": "#def0fc"
  },
  "callout_secondary": {
    "backgroundColor": "#ebebeb"
  },
  "callout_success": {
    "backgroundColor": "#e1faea"
  },
  "callout_alert": {
    "backgroundColor": "#fce6e2"
  },
  "callout_warning": {
    "backgroundColor": "#fff3d9"
  },
  "callout_small": {
    "paddingTop": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingBottom": "0.5rem",
    "paddingLeft": "0.5rem"
  },
  "callout_large": {
    "paddingTop": "3rem",
    "paddingRight": "3rem",
    "paddingBottom": "3rem",
    "paddingLeft": "3rem"
  },
  "close_button": {
    "position": "absolute",
    "color": "#8a8a8a",
    "right": "1rem",
    "top": "0.5rem",
    "fontSize": "2em",
    "lineHeight": "1",
    "cursor": "pointer"
  },
  "data_whatinput__mouse____close_button": {
    "outline": "0"
  },
  "close_button_hover": {
    "color": "#0a0a0a"
  },
  "close_button_focus": {
    "color": "#0a0a0a"
  },
  "is_drilldown": {
    "position": "relative",
    "overflow": "hidden"
  },
  "is_drilldown_submenu": {
    "position": "absolute",
    "top": "0",
    "left": "100%",
    "zIndex": "-1",
    "height": "100%",
    "width": "100%",
    "background": "#fefefe",
    "transition": "transform 0.15s linear, -webkit-transform 0.15s linear"
  },
  "is_drilldown_submenu_is_active": {
    "zIndex": "1",
    "display": "block",
    "WebkitTransform": "translateX(-100%)",
    "MsTransform": "translateX(-100%)",
    "transform": "translateX(-100%)"
  },
  "is_drilldown_submenu_is_closing": {
    "WebkitTransform": "translateX(100%)",
    "MsTransform": "translateX(100%)",
    "transform": "translateX(100%)"
  },
  "is_drilldown_submenu_parent___a": {
    "position": "relative"
  },
  "is_drilldown_submenu_parent___a__after": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "borderColor": "transparent transparent transparent #2199e8",
    "borderLeftStyle": "solid",
    "position": "absolute",
    "top": "50%",
    "marginTop": "-6px",
    "right": "1rem"
  },
  "js_drilldown_back__before": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 6px",
    "borderColor": "transparent #2199e8 transparent transparent",
    "borderRightStyle": "solid",
    "float": "left",
    "marginRight": "0.75rem",
    "marginLeft": "0.6rem",
    "marginTop": "14px"
  },
  "dropdown_pane": {
    "backgroundColor": "#fefefe",
    "border": "1px solid #cacaca",
    "display": "block",
    "padding": "1rem",
    "position": "absolute",
    "visibility": "hidden",
    "width": "300px",
    "zIndex": "10",
    "borderRadius": "0"
  },
  "dropdown_pane_is_open": {
    "visibility": "visible"
  },
  "dropdown_pane_tiny": {
    "width": "100px"
  },
  "dropdown_pane_small": {
    "width": "200px"
  },
  "dropdown_pane_large": {
    "width": "400px"
  },
  "data_whatinput__mouse____dropdown_menu_a": {
    "outline": "0"
  },
  "dropdown_menu__is_dropdown_submenu_parent": {
    "position": "relative"
  },
  "dropdown_menu__is_dropdown_submenu_parent_a__after": {
    "float": "right",
    "marginTop": "3px",
    "marginLeft": "10px"
  },
  "dropdown_menu__is_dropdown_submenu_parent_is_down_arrow_a": {
    "paddingRight": "1.5rem",
    "position": "relative"
  },
  "dropdown_menu__is_dropdown_submenu_parent_is_down_arrow___a__after": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 5px",
    "borderColor": "#2199e8 transparent transparent",
    "borderTopStyle": "solid",
    "position": "absolute",
    "top": "0.825rem",
    "right": "5px"
  },
  "dropdown_menu__is_dropdown_submenu_parent_is_left_arrow___a__after": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 5px",
    "borderColor": "transparent #2199e8 transparent transparent",
    "borderRightStyle": "solid",
    "float": "left",
    "marginLeft": "0",
    "marginRight": "10px"
  },
  "dropdown_menu__is_dropdown_submenu_parent_is_right_arrow___a__after": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 5px",
    "borderColor": "transparent transparent transparent #2199e8",
    "borderLeftStyle": "solid"
  },
  "dropdown_menu__is_dropdown_submenu_parent_is_left_arrow_opens_inner__submenu": {
    "right": "0",
    "left": "auto"
  },
  "dropdown_menu__is_dropdown_submenu_parent_is_right_arrow_opens_inner__submenu": {
    "left": "0",
    "right": "auto"
  },
  "dropdown_menu__is_dropdown_submenu_parent_opens_inner__submenu": {
    "top": "100%"
  },
  "no_js__dropdown_menu_ul": {
    "display": "none"
  },
  "dropdown_menu__submenu": {
    "display": "none",
    "position": "absolute",
    "top": "0",
    "left": "100%",
    "minWidth": "200px",
    "zIndex": "1",
    "background": "#fefefe",
    "border": "1px solid #cacaca",
    "marginTop": "-1px"
  },
  "dropdown_menu__submenu___li": {
    "width": "100%"
  },
  "dropdown_menu__submenu_first_sub": {
    "top": "100%",
    "left": "0",
    "right": "auto"
  },
  "dropdown_menu__submenu_not__js_dropdown_nohover_____is_dropdown_submenu_parent_hover____dropdown_menu__submenu": {
    "display": "block"
  },
  "dropdown_menu__submenu_js_dropdown_active": {
    "display": "block"
  },
  "dropdown_menu__is_dropdown_submenu_parent_opens_left__submenu": {
    "left": "auto",
    "right": "100%"
  },
  "dropdown_menu_align_right__submenu_first_sub": {
    "top": "100%",
    "left": "auto",
    "right": "0"
  },
  "is_dropdown_menu_vertical": {
    "width": "100px"
  },
  "is_dropdown_menu_vertical_align_right": {
    "float": "right"
  },
  "is_dropdown_menu_vertical___li__submenu": {
    "top": "0",
    "left": "100%"
  },
  "flex_video": {
    "position": "relative",
    "height": "0",
    "paddingBottom": "75%",
    "marginBottom": "1rem",
    "overflow": "hidden"
  },
  "flex_video_iframe": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%"
  },
  "flex_video_object": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%"
  },
  "flex_video_embed": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%"
  },
  "flex_video_video": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%"
  },
  "flex_video_widescreen": {
    "paddingBottom": "56.25%"
  },
  "flex_video_vimeo": {
    "paddingTop": "0"
  },
  "label_secondary": {
    "background": "#777",
    "color": "#fefefe"
  },
  "label_success": {
    "background": "#3adb76",
    "color": "#fefefe"
  },
  "label_alert": {
    "background": "#ec5840",
    "color": "#fefefe"
  },
  "label_warning": {
    "background": "#ffae00",
    "color": "#fefefe"
  },
  "media_object": {
    "marginBottom": "1rem",
    "display": "block"
  },
  "media_object_img": {
    "maxWidth": "none"
  },
  "media_object_section": {
    "display": "table-cell",
    "verticalAlign": "top"
  },
  "media_object_section_first_child": {
    "paddingRight": "1rem"
  },
  "media_object_section_last_child_not_____media_object_section_first_child": {
    "paddingLeft": "1rem"
  },
  "media_object_section_middle": {
    "verticalAlign": "middle"
  },
  "media_object_section_bottom": {
    "verticalAlign": "bottom"
  },
  "menu___li": {
    "display": "table-cell"
  },
  "data_whatinput__mouse____menu___li": {
    "outline": "0"
  },
  "menu___li_not__menu_text____a": {
    "display": "block",
    "padding": "0.7rem 1rem",
    "lineHeight": "1"
  },
  "menu_input": {
    "marginBottom": "0"
  },
  "menu_a": {
    "marginBottom": "0"
  },
  "menu_button": {
    "marginBottom": "0"
  },
  "menu___li___a___img": {
    "display": "inline-block",
    "marginRight": "0.25rem"
  },
  "menu___li___a___i": {
    "display": "inline-block",
    "marginRight": "0.25rem"
  },
  "menu___li___a___span": {
    "verticalAlign": "middle"
  },
  "menu_vertical___li": {
    "display": "block"
  },
  "menu_simple_a": {
    "padding": "0",
    "marginRight": "1rem"
  },
  "menu_align_right___li": {
    "float": "right"
  },
  "menu_expanded": {
    "display": "table",
    "tableLayout": "fixed",
    "width": "100%"
  },
  "menu_expanded___li_first_child_last_child": {
    "width": "100%"
  },
  "menu_icon_top___li___a": {
    "textAlign": "center"
  },
  "menu_icon_top___li___a___img": {
    "display": "block",
    "margin": "0 auto 0.25rem"
  },
  "menu_icon_top___li___a___i": {
    "display": "block",
    "margin": "0 auto 0.25rem"
  },
  "menu_nested": {
    "marginLeft": "1rem"
  },
  "menu_text": {
    "fontWeight": "bold",
    "color": "inherit",
    "lineHeight": "1",
    "paddingTop": "0",
    "paddingBottom": "0",
    "padding": "0.7rem 1rem"
  },
  "no_js__data_responsive_menu__ul": {
    "display": "none"
  },
  "off_canvas_wrapper": {
    "width": "100%",
    "overflowX": "hidden",
    "position": "relative",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden",
    "WebkitOverflowScrolling": "auto"
  },
  "off_canvas_wrapper_inner": {
    "position": "relative",
    "width": "100%",
    "transition": "transform 0.5s ease, -webkit-transform 0.5s ease"
  },
  "off_canvas_wrapper_inner__before": {
    "content": "' '",
    "display": "table"
  },
  "off_canvas_wrapper_inner__after": {
    "clear": "both"
  },
  "off_canvas_content": {
    "minHeight": "100%",
    "background": "#fefefe",
    "transition": "transform 0.5s ease, -webkit-transform 0.5s ease",
    "WebkitBackfaceVisibility": "hidden",
    "backfaceVisibility": "hidden",
    "zIndex": "1",
    "boxShadow": "0 0 10px rgba(10, 10, 10, 0.5)"
  },
  "js_off_canvas_exit": {
    "display": "none",
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%",
    "background": "rgba(254, 254, 254, 0.25)",
    "cursor": "pointer",
    "transition": "background 0.5s ease"
  },
  "is_off_canvas_open__js_off_canvas_exit": {
    "display": "block"
  },
  "off_canvas": {
    "position": "absolute",
    "background": "#e6e6e6",
    "zIndex": "-1",
    "maxHeight": "100%",
    "overflowY": "auto",
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)"
  },
  "data_whatinput__mouse____off_canvas": {
    "outline": "0"
  },
  "off_canvas_position_left": {
    "left": "-250px",
    "top": "0",
    "width": "250px"
  },
  "is_open_left": {
    "WebkitTransform": "translateX(250px)",
    "MsTransform": "translateX(250px)",
    "transform": "translateX(250px)"
  },
  "off_canvas_position_right": {
    "right": "-250px",
    "top": "0",
    "width": "250px"
  },
  "is_open_right": {
    "WebkitTransform": "translateX(-250px)",
    "MsTransform": "translateX(-250px)",
    "transform": "translateX(-250px)"
  },
  "orbit": {
    "position": "relative"
  },
  "orbit_container": {
    "position": "relative",
    "margin": "0",
    "overflow": "hidden",
    "listStyle": "none"
  },
  "orbit_slide": {
    "width": "100%",
    "maxHeight": "100%"
  },
  "orbit_slide_no_motionui_is_active": {
    "top": "0",
    "left": "0"
  },
  "orbit_figure": {
    "margin": "0"
  },
  "orbit_image": {
    "margin": "0",
    "width": "100%",
    "maxWidth": "100%"
  },
  "orbit_caption": {
    "position": "absolute",
    "bottom": "0",
    "width": "100%",
    "padding": "1rem",
    "marginBottom": "0",
    "color": "#fefefe",
    "backgroundColor": "rgba(10, 10, 10, 0.5)"
  },
  "orbit_previous": {
    "left": "0"
  },
  "orbit_next": {
    "left": "auto",
    "right": "0"
  },
  "data_whatinput__mouse____orbit_previous": {
    "outline": "0"
  },
  "data_whatinput__mouse____orbit_next": {
    "outline": "0"
  },
  "orbit_previous_hover": {
    "backgroundColor": "rgba(10, 10, 10, 0.5)"
  },
  "orbit_next_hover": {
    "backgroundColor": "rgba(10, 10, 10, 0.5)"
  },
  "orbit_previous_active": {
    "backgroundColor": "rgba(10, 10, 10, 0.5)"
  },
  "orbit_next_active": {
    "backgroundColor": "rgba(10, 10, 10, 0.5)"
  },
  "orbit_previous_focus": {
    "backgroundColor": "rgba(10, 10, 10, 0.5)"
  },
  "orbit_next_focus": {
    "backgroundColor": "rgba(10, 10, 10, 0.5)"
  },
  "orbit_bullets": {
    "position": "relative",
    "marginTop": "0.8rem",
    "marginBottom": "0.8rem",
    "textAlign": "center"
  },
  "data_whatinput__mouse____orbit_bullets": {
    "outline": "0"
  },
  "orbit_bullets_button": {
    "width": "1.2rem",
    "height": "1.2rem",
    "margin": "0.1rem",
    "backgroundColor": "#cacaca",
    "borderRadius": "50%"
  },
  "orbit_bullets_button_hover": {
    "backgroundColor": "#8a8a8a"
  },
  "orbit_bullets_button_is_active": {
    "backgroundColor": "#8a8a8a"
  },
  "pagination": {
    "marginLeft": "0",
    "marginBottom": "1rem"
  },
  "pagination__before": {
    "content": "' '",
    "display": "table"
  },
  "pagination__after": {
    "clear": "both"
  },
  "pagination_li": {
    "fontSize": "0.875rem",
    "marginRight": "0.0625rem",
    "display": "none",
    "borderRadius": "0"
  },
  "pagination_li_last_child": {
    "display": "inline-block"
  },
  "pagination_li_first_child": {
    "display": "inline-block"
  },
  "pagination_a": {
    "color": "#0a0a0a",
    "display": "block",
    "padding": "0.1875rem 0.625rem",
    "borderRadius": "0"
  },
  "pagination_button": {
    "color": "#0a0a0a",
    "display": "block",
    "padding": "0.1875rem 0.625rem",
    "borderRadius": "0"
  },
  "pagination_a_hover": {
    "background": "#e6e6e6"
  },
  "pagination_button_hover": {
    "background": "#e6e6e6"
  },
  "pagination__current": {
    "padding": "0.1875rem 0.625rem",
    "background": "#2199e8",
    "color": "#fefefe",
    "cursor": "default"
  },
  "pagination__disabled": {
    "padding": "0.1875rem 0.625rem",
    "color": "#cacaca",
    "cursor": "default"
  },
  "pagination__disabled_hover": {
    "background": "transparent"
  },
  "pagination__ellipsis__after": {
    "content": "'…'",
    "padding": "0.1875rem 0.625rem",
    "color": "#0a0a0a"
  },
  "pagination_previous_a__before": {
    "content": "'«'",
    "display": "inline-block",
    "marginRight": "0.5rem"
  },
  "pagination_previous_disabled__before": {
    "content": "'«'",
    "display": "inline-block",
    "marginRight": "0.5rem"
  },
  "pagination_next_a__after": {
    "content": "'»'",
    "display": "inline-block",
    "marginLeft": "0.5rem"
  },
  "pagination_next_disabled__after": {
    "content": "'»'",
    "display": "inline-block",
    "marginLeft": "0.5rem"
  },
  "progress_primary__progress_meter": {
    "backgroundColor": "#2199e8"
  },
  "progress_secondary__progress_meter": {
    "backgroundColor": "#777"
  },
  "progress_success__progress_meter": {
    "backgroundColor": "#3adb76"
  },
  "progress_alert__progress_meter": {
    "backgroundColor": "#ec5840"
  },
  "progress_warning__progress_meter": {
    "backgroundColor": "#ffae00"
  },
  "progress_meter": {
    "position": "relative",
    "display": "block",
    "width": "0%",
    "height": "100%",
    "backgroundColor": "#2199e8",
    "borderRadius": "0"
  },
  "progress_meter__progress_meter_text": {
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "WebkitTransform": "translate(-50%, -50%)",
    "MsTransform": "translate(-50%, -50%)",
    "transform": "translate(-50%, -50%)",
    "margin": "0",
    "fontSize": "0.75rem",
    "fontWeight": "bold",
    "color": "#fefefe",
    "whiteSpace": "nowrap"
  },
  "slider": {
    "position": "relative",
    "height": "0.5rem",
    "marginTop": "1.25rem",
    "marginBottom": "2.25rem",
    "backgroundColor": "#e6e6e6",
    "cursor": "pointer",
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "MsUserSelect": "none",
    "userSelect": "none",
    "MsTouchAction": "none",
    "touchAction": "none"
  },
  "slider_fill": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "display": "inline-block",
    "maxWidth": "100%",
    "height": "0.5rem",
    "backgroundColor": "#cacaca",
    "transition": "all 0.2s ease-in-out"
  },
  "slider_fill_is_dragging": {
    "transition": "all 0s linear"
  },
  "slider_handle": {
    "position": "absolute",
    "top": "50%",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "transform": "translateY(-50%)",
    "left": "0",
    "zIndex": "1",
    "display": "inline-block",
    "width": "1.4rem",
    "height": "1.4rem",
    "backgroundColor": "#2199e8",
    "transition": "all 0.2s ease-in-out",
    "MsTouchAction": "manipulation",
    "touchAction": "manipulation",
    "borderRadius": "0"
  },
  "data_whatinput__mouse____slider_handle": {
    "outline": "0"
  },
  "slider_handle_hover": {
    "backgroundColor": "#1583cc"
  },
  "slider_handle_is_dragging": {
    "transition": "all 0s linear"
  },
  "slider_disabled": {
    "opacity": "0.25",
    "cursor": "not-allowed"
  },
  "slider_vertical": {
    "display": "inline-block",
    "width": "0.5rem",
    "height": "12.5rem",
    "margin": "0 1.25rem",
    "WebkitTransform": "scale(1, -1)",
    "MsTransform": "scale(1, -1)",
    "transform": "scale(1, -1)"
  },
  "slider_vertical__slider_fill": {
    "top": "0",
    "width": "0.5rem",
    "maxHeight": "100%"
  },
  "slider_vertical__slider_handle": {
    "position": "absolute",
    "top": "0",
    "left": "50%",
    "width": "1.4rem",
    "height": "1.4rem",
    "WebkitTransform": "translateX(-50%)",
    "MsTransform": "translateX(-50%)",
    "transform": "translateX(-50%)"
  },
  "sticky_container": {
    "position": "relative"
  },
  "sticky": {
    "position": "absolute",
    "zIndex": "0",
    "WebkitTransform": "translate3d(0, 0, 0)",
    "transform": "translate3d(0, 0, 0)"
  },
  "sticky_is_stuck": {
    "position": "fixed",
    "zIndex": "5"
  },
  "sticky_is_stuck_is_at_top": {
    "top": "0"
  },
  "sticky_is_stuck_is_at_bottom": {
    "bottom": "0"
  },
  "sticky_is_anchored": {
    "position": "absolute",
    "left": "auto",
    "right": "auto"
  },
  "sticky_is_anchored_is_at_bottom": {
    "bottom": "0"
  },
  "body_is_reveal_open": {
    "overflow": "hidden"
  },
  "reveal_overlay": {
    "display": "none",
    "position": "fixed",
    "top": "0",
    "bottom": "0",
    "left": "0",
    "right": "0",
    "zIndex": "1005",
    "backgroundColor": "rgba(10, 10, 10, 0.45)",
    "overflowY": "scroll"
  },
  "reveal": {
    "display": "none",
    "zIndex": "1006",
    "padding": "1rem",
    "border": "1px solid #cacaca",
    "margin": "100px auto 0",
    "backgroundColor": "#fefefe",
    "borderRadius": "0",
    "position": "absolute",
    "overflowY": "auto"
  },
  "data_whatinput__mouse____reveal": {
    "outline": "0"
  },
  "reveal__column": {
    "minWidth": "0"
  },
  "reveal__columns": {
    "minWidth": "0"
  },
  "reveal____last_child": {
    "marginBottom": "0"
  },
  "reveal_collapse": {
    "padding": "0"
  },
  "reveal_full": {
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100vh",
    "minHeight": "100vh",
    "maxWidth": "none",
    "marginLeft": "0",
    "border": "0"
  },
  "switch": {
    "marginBottom": "1rem",
    "outline": "0",
    "position": "relative",
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "MsUserSelect": "none",
    "userSelect": "none",
    "color": "#fefefe",
    "fontWeight": "bold",
    "fontSize": "0.875rem"
  },
  "switch_input": {
    "opacity": "0",
    "position": "absolute"
  },
  "switch_paddle": {
    "background": "#cacaca",
    "cursor": "pointer",
    "display": "block",
    "position": "relative",
    "width": "4rem",
    "height": "2rem",
    "transition": "all 0.25s ease-out",
    "borderRadius": "0",
    "color": "inherit",
    "fontWeight": "inherit"
  },
  "input____switch_paddle": {
    "margin": "0"
  },
  "switch_paddle__after": {
    "background": "#fefefe",
    "content": "''",
    "display": "block",
    "position": "absolute",
    "height": "1.5rem",
    "left": "0.25rem",
    "top": "0.25rem",
    "width": "1.5rem",
    "transition": "all 0.25s ease-out",
    "WebkitTransform": "translate3d(0, 0, 0)",
    "transform": "translate3d(0, 0, 0)",
    "borderRadius": "0"
  },
  "input_checked____switch_paddle": {
    "background": "#2199e8"
  },
  "input_checked____switch_paddle__after": {
    "left": "2.25rem"
  },
  "data_whatinput__mouse___input_focus____switch_paddle": {
    "outline": "0"
  },
  "switch_active": {
    "left": "8%",
    "display": "none"
  },
  "switch_inactive": {
    "right": "15%"
  },
  "input_checked___label____switch_active": {
    "display": "block"
  },
  "input_checked___label____switch_inactive": {
    "display": "none"
  },
  "switch_tiny__switch_paddle": {
    "width": "3rem",
    "height": "1.5rem",
    "fontSize": "0.625rem"
  },
  "switch_tiny__switch_paddle__after": {
    "width": "1rem",
    "height": "1rem"
  },
  "switch_tiny_input_checked____switch_paddle_after": {
    "left": "1.75rem"
  },
  "switch_small__switch_paddle": {
    "width": "3.5rem",
    "height": "1.75rem",
    "fontSize": "0.75rem"
  },
  "switch_small__switch_paddle__after": {
    "width": "1.25rem",
    "height": "1.25rem"
  },
  "switch_small_input_checked____switch_paddle_after": {
    "left": "2rem"
  },
  "switch_large__switch_paddle": {
    "width": "5rem",
    "height": "2.5rem",
    "fontSize": "1rem"
  },
  "switch_large__switch_paddle__after": {
    "width": "2rem",
    "height": "2rem"
  },
  "switch_large_input_checked____switch_paddle_after": {
    "left": "2.75rem"
  },
  "thead": {
    "background": "#f8f8f8",
    "color": "#0a0a0a"
  },
  "tbody": {
    "border": "1px solid #f1f1f1",
    "backgroundColor": "#fefefe"
  },
  "tfoot": {
    "background": "#f8f8f8",
    "color": "#0a0a0a"
  },
  "caption": {
    "fontWeight": "bold",
    "padding": "0.5rem 0.625rem 0.625rem"
  },
  "thead_tr": {
    "background": "transparent"
  },
  "tfoot_tr": {
    "background": "transparent"
  },
  "thead_th": {
    "padding": "0.5rem 0.625rem 0.625rem",
    "fontWeight": "bold",
    "textAlign": "left"
  },
  "thead_td": {
    "padding": "0.5rem 0.625rem 0.625rem",
    "fontWeight": "bold",
    "textAlign": "left"
  },
  "tfoot_th": {
    "padding": "0.5rem 0.625rem 0.625rem",
    "fontWeight": "bold",
    "textAlign": "left"
  },
  "tfoot_td": {
    "padding": "0.5rem 0.625rem 0.625rem",
    "fontWeight": "bold",
    "textAlign": "left"
  },
  "tbody_tr_nth_child_even": {
    "backgroundColor": "#f1f1f1"
  },
  "tbody_th": {
    "padding": "0.5rem 0.625rem 0.625rem"
  },
  "tbody_td": {
    "padding": "0.5rem 0.625rem 0.625rem"
  },
  "table_scroll": {
    "display": "block",
    "width": "100%",
    "overflowX": "auto"
  },
  "table_hover_tr_hover": {
    "backgroundColor": "#f9f9f9"
  },
  "table_hover_tr_nth_of_type_even__hover": {
    "backgroundColor": "#ececec"
  },
  "tabs": {
    "margin": "0",
    "listStyleType": "none",
    "background": "#fefefe",
    "border": "1px solid #e6e6e6"
  },
  "tabs__before": {
    "content": "' '",
    "display": "table"
  },
  "tabs__after": {
    "clear": "both"
  },
  "tabs_vertical___li": {
    "width": "auto",
    "float": "none",
    "display": "block"
  },
  "tabs_simple___li___a": {
    "padding": "0"
  },
  "tabs_simple___li___a_hover": {
    "background": "transparent"
  },
  "tabs_primary": {
    "background": "#2199e8"
  },
  "tabs_primary___li___a": {
    "color": "#fefefe"
  },
  "tabs_primary___li___a_hover": {
    "background": "#1893e4"
  },
  "tabs_primary___li___a_focus": {
    "background": "#1893e4"
  },
  "tabs_title": {
    "float": "left"
  },
  "tabs_title___a": {
    "display": "block",
    "padding": "1.25rem 1.5rem",
    "lineHeight": "1",
    "fontSize": "12px",
    "color": "#2199e8"
  },
  "tabs_title___a_hover": {
    "background": "#fefefe"
  },
  "tabs_title___a_focus": {
    "background": "#e6e6e6"
  },
  "tabs_title___a_aria_selected__true": {
    "background": "#e6e6e6"
  },
  "tabs_content": {
    "background": "#fefefe",
    "transition": "all 0.5s ease",
    "border": "1px solid #e6e6e6",
    "borderTop": "0"
  },
  "tabs_content_vertical": {
    "border": "1px solid #e6e6e6",
    "borderLeft": "0"
  },
  "tabs_panel": {
    "display": "none",
    "padding": "1rem"
  },
  "tabs_panel_is_active": {
    "display": "block"
  },
  "thumbnail": {
    "border": "solid 4px #fefefe",
    "boxShadow": "0 0 0 1px rgba(10, 10, 10, 0.2)",
    "display": "inline-block",
    "lineHeight": "0",
    "maxWidth": "100%",
    "transition": "box-shadow 200ms ease-out",
    "borderRadius": "0",
    "marginBottom": "1rem"
  },
  "thumbnail_hover": {
    "boxShadow": "0 0 6px 1px rgba(33, 153, 232, 0.5)"
  },
  "thumbnail_focus": {
    "boxShadow": "0 0 6px 1px rgba(33, 153, 232, 0.5)"
  },
  "title_bar": {
    "background": "#0a0a0a",
    "color": "#fefefe",
    "padding": "0.5rem"
  },
  "title_bar__before": {
    "content": "' '",
    "display": "table"
  },
  "title_bar__after": {
    "clear": "both"
  },
  "title_bar__menu_icon": {
    "marginLeft": "0.25rem",
    "marginRight": "0.5rem"
  },
  "title_bar_left": {
    "float": "left"
  },
  "title_bar_right": {
    "float": "right",
    "textAlign": "right"
  },
  "title_bar_title": {
    "fontWeight": "bold",
    "verticalAlign": "middle",
    "display": "inline-block"
  },
  "menu_icon": {
    "position": "relative",
    "display": "inline-block",
    "verticalAlign": "middle",
    "cursor": "pointer",
    "width": "20px",
    "height": "16px"
  },
  "menu_icon__after": {
    "content": "''",
    "position": "absolute",
    "display": "block",
    "width": "100%",
    "height": "2px",
    "background": "#fefefe",
    "top": "0",
    "left": "0",
    "boxShadow": "0 7px 0 #fefefe, 0 14px 0 #fefefe"
  },
  "menu_icon_hover__after": {
    "background": "#cacaca",
    "boxShadow": "0 7px 0 #cacaca, 0 14px 0 #cacaca"
  },
  "has_tip": {
    "borderBottom": "dotted 1px #8a8a8a",
    "fontWeight": "bold",
    "position": "relative",
    "display": "inline-block",
    "cursor": "help"
  },
  "tooltip": {
    "backgroundColor": "#0a0a0a",
    "color": "#fefefe",
    "fontSize": "80%",
    "padding": "0.75rem",
    "position": "absolute",
    "zIndex": "10",
    "top": "calc(100% + 0.6495rem)",
    "maxWidth": "10rem !important",
    "borderRadius": "0"
  },
  "tooltip__before": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 0.75rem",
    "borderColor": "transparent transparent #0a0a0a",
    "borderBottomStyle": "solid",
    "bottom": "100%",
    "position": "absolute",
    "left": "50%",
    "WebkitTransform": "translateX(-50%)",
    "MsTransform": "translateX(-50%)",
    "transform": "translateX(-50%)"
  },
  "tooltip_top__before": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 0.75rem",
    "borderColor": "#0a0a0a transparent transparent",
    "borderTopStyle": "solid",
    "top": "100%",
    "bottom": "auto"
  },
  "tooltip_left__before": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 0.75rem",
    "borderColor": "transparent transparent transparent #0a0a0a",
    "borderLeftStyle": "solid",
    "bottom": "auto",
    "left": "100%",
    "top": "50%",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "transform": "translateY(-50%)"
  },
  "tooltip_right__before": {
    "content": "''",
    "display": "block",
    "width": "0",
    "height": "0",
    "border": "inset 0.75rem",
    "borderColor": "transparent #0a0a0a transparent transparent",
    "borderRightStyle": "solid",
    "bottom": "auto",
    "left": "auto",
    "right": "100%",
    "top": "50%",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "transform": "translateY(-50%)"
  },
  "top_bar": {
    "backgroundColor": "#e6e6e6"
  },
  "top_bar__before": {
    "content": "' '",
    "display": "table"
  },
  "top_bar__after": {
    "clear": "both"
  },
  "top_bar_ul": {
    "backgroundColor": "#e6e6e6"
  },
  "top_bar_a": {
    "color": "#2199e8"
  },
  "top_bar_input": {
    "width": "200px",
    "marginRight": "1rem"
  },
  "top_bar_input_button": {
    "width": "auto"
  },
  "@media screen and (max-width: 74.9375em)": {
    "__expression__": "screen and (max-width: 74.9375em)",
    "stacked_for_large__top_bar_right": {
      "width": "100%"
    },
    "stacked_for_large__top_bar_left": {
      "width": "100%"
    }
  },
  "top_bar_left": {
    "float": "left"
  },
  "top_bar_right": {
    "float": "right"
  },
  "slide_in_down_mui_enter_mui_enter_active": {
    "WebkitTransform": "translateY(0)",
    "MsTransform": "translateY(0)",
    "transform": "translateY(0)"
  },
  "slide_in_left_mui_enter_mui_enter_active": {
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)"
  },
  "slide_in_up_mui_enter_mui_enter_active": {
    "WebkitTransform": "translateY(0)",
    "MsTransform": "translateY(0)",
    "transform": "translateY(0)"
  },
  "slide_in_right_mui_enter_mui_enter_active": {
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)"
  },
  "slide_out_down_mui_leave_mui_leave_active": {
    "WebkitTransform": "translateY(100%)",
    "MsTransform": "translateY(100%)",
    "transform": "translateY(100%)"
  },
  "slide_out_right_mui_leave_mui_leave_active": {
    "WebkitTransform": "translateX(100%)",
    "MsTransform": "translateX(100%)",
    "transform": "translateX(100%)"
  },
  "slide_out_up_mui_leave_mui_leave_active": {
    "WebkitTransform": "translateY(-100%)",
    "MsTransform": "translateY(-100%)",
    "transform": "translateY(-100%)"
  },
  "slide_out_left_mui_leave_mui_leave_active": {
    "WebkitTransform": "translateX(-100%)",
    "MsTransform": "translateX(-100%)",
    "transform": "translateX(-100%)"
  },
  "fade_in_mui_enter_mui_enter_active": {
    "opacity": "1"
  },
  "fade_out_mui_leave_mui_leave_active": {
    "opacity": "0"
  },
  "hinge_in_from_top_mui_enter_mui_enter_active": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "opacity": "1"
  },
  "hinge_in_from_right_mui_enter_mui_enter_active": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "opacity": "1"
  },
  "hinge_in_from_bottom_mui_enter_mui_enter_active": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "opacity": "1"
  },
  "hinge_in_from_left_mui_enter_mui_enter_active": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "opacity": "1"
  },
  "hinge_in_from_middle_x_mui_enter_mui_enter_active": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "opacity": "1"
  },
  "hinge_in_from_middle_y_mui_enter_mui_enter_active": {
    "WebkitTransform": "perspective(2000px) rotate(0deg)",
    "transform": "perspective(2000px) rotate(0deg)",
    "opacity": "1"
  },
  "hinge_out_from_top_mui_leave_mui_leave_active": {
    "WebkitTransform": "perspective(2000px) rotateX(-90deg)",
    "transform": "perspective(2000px) rotateX(-90deg)",
    "opacity": "0"
  },
  "hinge_out_from_right_mui_leave_mui_leave_active": {
    "WebkitTransform": "perspective(2000px) rotateY(-90deg)",
    "transform": "perspective(2000px) rotateY(-90deg)",
    "opacity": "0"
  },
  "hinge_out_from_bottom_mui_leave_mui_leave_active": {
    "WebkitTransform": "perspective(2000px) rotateX(90deg)",
    "transform": "perspective(2000px) rotateX(90deg)",
    "opacity": "0"
  },
  "hinge_out_from_left_mui_leave_mui_leave_active": {
    "WebkitTransform": "perspective(2000px) rotateY(90deg)",
    "transform": "perspective(2000px) rotateY(90deg)",
    "opacity": "0"
  },
  "hinge_out_from_middle_x_mui_leave_mui_leave_active": {
    "WebkitTransform": "perspective(2000px) rotateX(-90deg)",
    "transform": "perspective(2000px) rotateX(-90deg)",
    "opacity": "0"
  },
  "hinge_out_from_middle_y_mui_leave_mui_leave_active": {
    "WebkitTransform": "perspective(2000px) rotateY(-90deg)",
    "transform": "perspective(2000px) rotateY(-90deg)",
    "opacity": "0"
  },
  "scale_in_up_mui_enter_mui_enter_active": {
    "WebkitTransform": "scale(1)",
    "MsTransform": "scale(1)",
    "transform": "scale(1)",
    "opacity": "1"
  },
  "scale_in_down_mui_enter_mui_enter_active": {
    "WebkitTransform": "scale(1)",
    "MsTransform": "scale(1)",
    "transform": "scale(1)",
    "opacity": "1"
  },
  "scale_out_up_mui_leave_mui_leave_active": {
    "WebkitTransform": "scale(1.5)",
    "MsTransform": "scale(1.5)",
    "transform": "scale(1.5)",
    "opacity": "0"
  },
  "scale_out_down_mui_leave_mui_leave_active": {
    "WebkitTransform": "scale(0.5)",
    "MsTransform": "scale(0.5)",
    "transform": "scale(0.5)",
    "opacity": "0"
  },
  "spin_in_mui_enter_mui_enter_active": {
    "WebkitTransform": "rotate(0)",
    "MsTransform": "rotate(0)",
    "transform": "rotate(0)",
    "opacity": "1"
  },
  "spin_out_mui_leave_mui_leave_active": {
    "WebkitTransform": "rotate(0.75turn)",
    "MsTransform": "rotate(0.75turn)",
    "transform": "rotate(0.75turn)",
    "opacity": "0"
  },
  "spin_in_ccw_mui_enter_mui_enter_active": {
    "WebkitTransform": "rotate(0)",
    "MsTransform": "rotate(0)",
    "transform": "rotate(0)",
    "opacity": "1"
  },
  "spin_out_ccw_mui_leave_mui_leave_active": {
    "WebkitTransform": "rotate(-0.75turn)",
    "MsTransform": "rotate(-0.75turn)",
    "transform": "rotate(-0.75turn)",
    "opacity": "0"
  },
  "slow": {
    "WebkitAnimationDuration": "750ms !important",
    "animationDuration": "750ms !important"
  },
  "fast": {
    "WebkitAnimationDuration": "250ms !important",
    "animationDuration": "250ms !important"
  },
  "linear": {
    "WebkitAnimationTimingFunction": "linear !important",
    "animationTimingFunction": "linear !important"
  },
  "ease": {
    "WebkitAnimationTimingFunction": "ease !important",
    "animationTimingFunction": "ease !important"
  },
  "ease_in": {
    "WebkitAnimationTimingFunction": "ease-in !important",
    "animationTimingFunction": "ease-in !important"
  },
  "ease_out": {
    "WebkitAnimationTimingFunction": "ease-out !important",
    "animationTimingFunction": "ease-out !important"
  },
  "ease_in_out": {
    "WebkitAnimationTimingFunction": "ease-in-out !important",
    "animationTimingFunction": "ease-in-out !important"
  },
  "bounce_in": {
    "WebkitAnimationTimingFunction": "cubic-bezier(0.485, 0.155, 0.24, 1.245) !important",
    "animationTimingFunction": "cubic-bezier(0.485, 0.155, 0.24, 1.245) !important"
  },
  "bounce_out": {
    "WebkitAnimationTimingFunction": "cubic-bezier(0.485, 0.155, 0.515, 0.845) !important",
    "animationTimingFunction": "cubic-bezier(0.485, 0.155, 0.515, 0.845) !important"
  },
  "bounce_in_out": {
    "WebkitAnimationTimingFunction": "cubic-bezier(0.76, -0.245, 0.24, 1.245) !important",
    "animationTimingFunction": "cubic-bezier(0.76, -0.245, 0.24, 1.245) !important"
  },
  "short_delay": {
    "WebkitAnimationDelay": "300ms !important",
    "animationDelay": "300ms !important"
  },
  "long_delay": {
    "WebkitAnimationDelay": "700ms !important",
    "animationDelay": "700ms !important"
  },
  "shake": {
    "WebkitAnimationName": "shake-7",
    "animationName": "shake-7"
  },
  "spin_cw": {
    "WebkitAnimationName": "spin-cw-1turn",
    "animationName": "spin-cw-1turn"
  },
  "spin_ccw": {
    "WebkitAnimationName": "spin-cw-1turn",
    "animationName": "spin-cw-1turn"
  },
  "wiggle": {
    "WebkitAnimationName": "wiggle-7deg",
    "animationName": "wiggle-7deg"
  },
  "infinite": {
    "WebkitAnimationIterationCount": "infinite",
    "animationIterationCount": "infinite"
  }
}
