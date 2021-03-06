// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wXx2xXJUyU1nsKSRrmgFXN
// Component: nU-xrFNPWV8n1
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
import IconLink from "../../IconLink"; // plasmic-import: BXSTVc4m0Ph0Bv/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: OHb7xp08cGEU3S/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_random_chungs_furn_e_commerce.module.css"; // plasmic-import: wXx2xXJUyU1nsKSRrmgFXN/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: nU-xrFNPWV8n1/css

import LocationArrowIcon from "./icons/PlasmicIcon__LocationArrow"; // plasmic-import: 4U5CyihJqsPrMo/icon
import FacebookIcon from "./icons/PlasmicIcon__Facebook"; // plasmic-import: MQokh63DxaXITT/icon
import InstagramIcon from "./icons/PlasmicIcon__Instagram"; // plasmic-import: 5OAR191-kzhIF0/icon
import LinkedinIcon from "./icons/PlasmicIcon__Linkedin"; // plasmic-import: iN_9i2FujxnbuU/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__aha43)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__cpWjj)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___7Ay1
            )}
          >
            {"Information"}
          </div>

          <div className={classNames(defaultcss.all, sty.box__slYt8)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__gj3GB
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"About Us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___9Oimy
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Contact Us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__icvky
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"News"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___9DBuB
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Store"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__z2UtY)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__ppXbO
            )}
          >
            {"Collections"}
          </div>

          <div className={classNames(defaultcss.all, sty.box__fLagj)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___8H0OO
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Wooden Chair"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___8Wbr
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Royal Cloth Sofa"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__oq21A
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Accent Chair"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__rX5Z
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Bed"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__iwLtn
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Hanging Lamp"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__z9Rt)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__zaFiC
            )}
          >
            {"My Accounts"}
          </div>

          <div className={classNames(defaultcss.all, sty.box___1EIUa)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__di4Pb
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"My Account"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__vxcGs
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Wishlist"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ssMow
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Community"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__orrH
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Order History"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__svntZ
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"My Cart"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___0O7HU)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___6PRtu
            )}
          >
            {"Newsletter"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__d1FCd
            )}
          >
            {"Subscribe to get latest news, updates, and information"}
          </div>

          <div className={classNames(defaultcss.all, sty.box__oTGlB)}>
            <input
              data-plasmic-name={"textbox"}
              data-plasmic-override={overrides.textbox}
              className={classNames(defaultcss.input, sty.textbox)}
              placeholder={"Enter Email Here..." as const}
              size={1 as const}
              type={"text" as const}
              value={"" as const}
            />

            <IconLink
              className={classNames("__wab_instance", sty.iconLink__hgmFi)}
              icon={
                <LocationArrowIcon
                  className={classNames(defaultcss.all, sty.svg__sAhAk)}
                  role={"img"}
                />
              }
            />
          </div>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__vToQf)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__vyuM)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink___4Q70)}
            icon={
              <FacebookIcon
                className={classNames(defaultcss.all, sty.svg__j5H9O)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__xUoHw)}
            icon={
              <InstagramIcon
                className={classNames(defaultcss.all, sty.svg__gswEb)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__uuAoR)}
            icon={
              <LinkedinIcon
                className={classNames(defaultcss.all, sty.svg__tSpvt)}
                role={"img"}
              />
            }
          />
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={hasVariant(globalVariants, "screen", "mobile") ? true : false}
          className={classNames(defaultcss.all, sty.box__lRdT5)}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___1Sj5Q
            )}
          >
            {"?? Copyright. "}
          </div>

          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__spugD
            )}
            component={Link}
            href={"https://www.plasmic.app/" as const}
            platform={"nextjs"}
          >
            {"Made by Plasmic. "}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link___6SuJ9
            )}
            component={Link}
            href={"https://www.themesine.com/" as const}
            platform={"nextjs"}
          >
            {"Inspired by Themesine."}
          </p.PlasmicLink>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox"],
  textbox: ["textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFooter__VariantsArgs;
  args?: PlasmicFooter__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
