// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wXx2xXJUyU1nsKSRrmgFXN
// Component: Pbz_eeXHmIG6Oo
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_random_chungs_furn_e_commerce.module.css"; // plasmic-import: wXx2xXJUyU1nsKSRrmgFXN/projectcss
import * as sty from "./PlasmicRatings.module.css"; // plasmic-import: Pbz_eeXHmIG6Oo/css

import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: bvISjTB_oe6Mak/icon

export type PlasmicRatings__VariantMembers = {
  stars: "zero" | "one" | "two" | "three" | "four" | "five";
};

export type PlasmicRatings__VariantsArgs = {
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
};

type VariantPropType = keyof PlasmicRatings__VariantsArgs;
export const PlasmicRatings__VariantProps = new Array<VariantPropType>("stars");

export type PlasmicRatings__ArgsType = {
  numReviews?: React.ReactNode;
};

type ArgPropType = keyof PlasmicRatings__ArgsType;
export const PlasmicRatings__ArgProps = new Array<ArgPropType>("numReviews");

export type PlasmicRatings__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultRatingsProps {
  numReviews?: React.ReactNode;
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
  className?: string;
}

function PlasmicRatings__RenderFunc(props: {
  variants: PlasmicRatings__VariantsArgs;
  args: PlasmicRatings__ArgsType;
  overrides: PlasmicRatings__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__stars_five]: hasVariant(variants, "stars", "five"),
        [sty.root__stars_four]: hasVariant(variants, "stars", "four"),
        [sty.root__stars_one]: hasVariant(variants, "stars", "one"),
        [sty.root__stars_three]: hasVariant(variants, "stars", "three"),
        [sty.root__stars_two]: hasVariant(variants, "stars", "two"),
        [sty.root__stars_zero]: hasVariant(variants, "stars", "zero")
      })}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box)}
      >
        {(hasVariant(variants, "stars", "zero") ? false : true) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__wop3X, {
              [sty.svg__stars_five__wop3XGvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_zero__wop3Xo85BC]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? true
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? false
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__rbJBo, {
              [sty.svg__stars_five__rbJBoGvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__rbJBoH4MFt]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__rbJBoBv1So]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__rbJBo1JBsp]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__rbJBoMbLea]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__rbJBoO85BC]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? true
            : hasVariant(variants, "stars", "two")
            ? false
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? false
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__y8Daa, {
              [sty.svg__stars_five__y8DaaGvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__y8DaaH4MFt]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__y8DaaBv1So]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__y8Daa1JBsp]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__y8DaaMbLea]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__y8DaaO85BC]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? true
            : hasVariant(variants, "stars", "three")
            ? false
            : hasVariant(variants, "stars", "two")
            ? false
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? false
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__h1Bxj, {
              [sty.svg__stars_five__h1BxjGvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__h1BxjH4MFt]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__h1BxjBv1So]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__h1Bxj1JBsp]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__h1BxjMbLea]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__h1BxjO85BC]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? true
            : hasVariant(variants, "stars", "four")
            ? false
            : hasVariant(variants, "stars", "three")
            ? false
            : hasVariant(variants, "stars", "two")
            ? false
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? false
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__xLfPn, {
              [sty.svg__stars_five__xLfPnGvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__xLfPnh4MFt]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__xLfPnBv1So]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__xLfPn1JBsp]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__xLfPnmbLea]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__xLfPno85BC]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? false
            : hasVariant(variants, "stars", "four")
            ? false
            : hasVariant(variants, "stars", "three")
            ? false
            : hasVariant(variants, "stars", "two")
            ? false
            : hasVariant(variants, "stars", "one")
            ? false
            : hasVariant(variants, "stars", "zero")
            ? true
            : false
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__yZ4Zl, {
              [sty.svg__stars_five__yZ4ZlGvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__yZ4Zlh4MFt]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_one__yZ4ZlBv1So]: hasVariant(
                variants,
                "stars",
                "one"
              ),
              [sty.svg__stars_three__yZ4Zl1JBsp]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__yZ4ZlmbLea]: hasVariant(
                variants,
                "stars",
                "two"
              ),
              [sty.svg__stars_zero__yZ4Zlo85BC]: hasVariant(
                variants,
                "stars",
                "zero"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? false
            : hasVariant(variants, "stars", "four")
            ? false
            : hasVariant(variants, "stars", "three")
            ? false
            : hasVariant(variants, "stars", "two")
            ? false
            : true
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__n2F4, {
              [sty.svg__stars_five__n2F4GvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__n2F4H4MFt]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_three__n2F41JBsp]: hasVariant(
                variants,
                "stars",
                "three"
              ),
              [sty.svg__stars_two__n2F4MbLea]: hasVariant(
                variants,
                "stars",
                "two"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? false
            : hasVariant(variants, "stars", "four")
            ? false
            : hasVariant(variants, "stars", "three")
            ? false
            : true
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__vSch, {
              [sty.svg__stars_five__vSchGvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__vSchH4MFt]: hasVariant(
                variants,
                "stars",
                "four"
              ),
              [sty.svg__stars_three__vSch1JBsp]: hasVariant(
                variants,
                "stars",
                "three"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(
          hasVariant(variants, "stars", "five")
            ? false
            : hasVariant(variants, "stars", "four")
            ? false
            : true
        ) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__wtvmH, {
              [sty.svg__stars_five__wtvmHGvGah]: hasVariant(
                variants,
                "stars",
                "five"
              ),
              [sty.svg__stars_four__wtvmHh4MFt]: hasVariant(
                variants,
                "stars",
                "four"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(hasVariant(variants, "stars", "five") ? false : true) ? (
          <StarIcon
            className={classNames(defaultcss.all, sty.svg__cLeG2, {
              [sty.svg__stars_five__cLeG2GvGah]: hasVariant(
                variants,
                "stars",
                "five"
              )
            })}
            role={"img"}
          />
        ) : null}
      </p.Stack>

      <p.PlasmicSlot
        defaultContents={"(45 Review)"}
        value={args.numReviews}
        className={classNames(sty.slotNumReviews)}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRatings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicRatings__VariantsArgs;
  args?: PlasmicRatings__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicRatings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicRatings__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRatings__ArgProps,
      internalVariantPropNames: PlasmicRatings__VariantProps
    });

    return PlasmicRatings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatings";
  } else {
    func.displayName = `PlasmicRatings.${nodeName}`;
  }
  return func;
}

export const PlasmicRatings = Object.assign(
  // Top-level PlasmicRatings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicRatings
    internalVariantProps: PlasmicRatings__VariantProps,
    internalArgProps: PlasmicRatings__ArgProps
  }
);

export default PlasmicRatings;
/* prettier-ignore-end */
