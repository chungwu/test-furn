// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wXx2xXJUyU1nsKSRrmgFXN
// Component: Lfy09lno5ZFcc
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
import Header from "../../Header"; // plasmic-import: R-DvB2UHlAVNW/component
import ProductCarousel from "../../ProductCarousel"; // plasmic-import: KXI4tDGIAqY7RE/component
import ProductCard from "../../ProductCard"; // plasmic-import: 4qNi-fYbHkTINQ/component
import Ratings from "../../Ratings"; // plasmic-import: Pbz_eeXHmIG6Oo/component
import FeatureItem from "../../FeatureItem"; // plasmic-import: zEY_byEQ9HCDq/component
import BlogPost from "../../BlogPost"; // plasmic-import: xXRlJBYW7Nhstt/component
import Footer from "../../Footer"; // plasmic-import: nU-xrFNPWV8n1/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: OHb7xp08cGEU3S/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_random_chungs_furn_e_commerce.module.css"; // plasmic-import: wXx2xXJUyU1nsKSRrmgFXN/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: Lfy09lno5ZFcc/css

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  productCarousel?: p.Flex<typeof ProductCarousel>;
  featureItem?: p.Flex<typeof FeatureItem>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
      </Head>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div className={classNames(defaultcss.all, sty.box__xc0PV)}>
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <ProductCarousel
              data-plasmic-name={"productCarousel"}
              data-plasmic-override={overrides.productCarousel}
              className={classNames("__wab_instance", sty.productCarousel)}
            />

            <div className={classNames(defaultcss.all, sty.box__yXu8H)}>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__zqzek
                )}
              >
                {"New Arrivals"}
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__gV92D)}
            >
              <ProductCard
                className={classNames("__wab_instance", sty.productCard__x3AKr)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__eCNu)}
                    role={"img"}
                    src={
                      "/plasmic/random_chungs_furn_e_commerce/images/arrivals1.bin"
                    }
                  />
                }
                onSale={"onSale" as const}
                price={"$65.00"}
                ratings={
                  <Ratings
                    className={classNames("__wab_instance", sty.ratings__uWPq)}
                    numReviews={"(45 Review)"}
                  />
                }
                title={"Wooden Chair"}
              />

              <ProductCard
                className={classNames("__wab_instance", sty.productCard__sWUsJ)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__lI6Z5)}
                    role={"img"}
                    src={
                      "/plasmic/random_chungs_furn_e_commerce/images/arrivals2.bin"
                    }
                  />
                }
                onSale={"onSale" as const}
                price={"$80.00"}
                ratings={
                  <Ratings
                    className={classNames("__wab_instance", sty.ratings__hpEr)}
                    numReviews={"(45 Review)"}
                  />
                }
                title={"Single Armchair"}
              />

              <ProductCard
                className={classNames("__wab_instance", sty.productCard__yibQy)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___5TMdJ)}
                    role={"img"}
                    src={
                      "/plasmic/random_chungs_furn_e_commerce/images/arrivals3.bin"
                    }
                  />
                }
                price={"$40.00"}
                ratings={
                  <Ratings
                    className={classNames("__wab_instance", sty.ratings__lLx3L)}
                    numReviews={"(45 Review)"}
                  />
                }
                title={"Wooden Armchair"}
              />

              <ProductCard
                className={classNames("__wab_instance", sty.productCard__ujZ67)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___8IrNc)}
                    role={"img"}
                    src={
                      "/plasmic/random_chungs_furn_e_commerce/images/arrivals4.bin"
                    }
                  />
                }
                onSale={"onSale" as const}
                price={"$100.00"}
                ratings={
                  <Ratings
                    className={classNames("__wab_instance", sty.ratings__iyAYq)}
                    numReviews={"(45 Review)"}
                  />
                }
                title={"Stylish Chair"}
              />
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__rQfVk)}
            >
              <ProductCard
                className={classNames("__wab_instance", sty.productCard__hh90E)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__hp8Gw)}
                    role={"img"}
                    src={
                      "/plasmic/random_chungs_furn_e_commerce/images/arrivals5.bin"
                    }
                  />
                }
                price={"$120.00"}
                title={"Modern Chair"}
              />

              <ProductCard
                className={classNames(
                  "__wab_instance",
                  sty.productCard___4Lui7
                )}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__xqEB)}
                    role={"img"}
                    src={
                      "/plasmic/random_chungs_furn_e_commerce/images/arrivals6.bin"
                    }
                  />
                }
                onSale={"onSale" as const}
                price={"$140.00"}
                title={"Mapple Wood Dinning Table"}
              />

              <ProductCard
                className={classNames("__wab_instance", sty.productCard__u1S3)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__ntw2L)}
                    role={"img"}
                    src={
                      "/plasmic/random_chungs_furn_e_commerce/images/arrivals7.bin"
                    }
                  />
                }
                onSale={"onSale" as const}
                price={"$90.00"}
                title={"Arm Chair"}
              />

              <ProductCard
                className={classNames("__wab_instance", sty.productCard__xyuic)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___2Wh6H)}
                    role={"img"}
                    src={
                      "/plasmic/random_chungs_furn_e_commerce/images/arrivals8.bin"
                    }
                  />
                }
                price={"$140.00"}
                title={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__hgF0I
                    )}
                  >
                    {"Wooden Bed"}
                  </div>
                }
              />
            </p.Stack>

            <FeatureItem
              data-plasmic-name={"featureItem"}
              data-plasmic-override={overrides.featureItem}
              className={classNames("__wab_instance", sty.featureItem)}
            />

            <div className={classNames(defaultcss.all, sty.box___7IyNt)}>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__nO1SK
                )}
              >
                {"Featured Products"}
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__rr9X2)}
            >
              <ProductCard
                className={classNames(
                  "__wab_instance",
                  sty.productCard___71U40
                )}
                price={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__gw98C
                    )}
                  >
                    {"$160.00"}
                  </div>
                }
                ratings={
                  <Ratings
                    className={classNames("__wab_instance", sty.ratings__kwTls)}
                    numReviews={"(12 Review)"}
                    stars={"two" as const}
                  />
                }
                title={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__lVfHi
                    )}
                  >
                    {"Designed Sofa"}
                  </div>
                }
                withReviews={"withReviews" as const}
              />

              <ProductCard
                className={classNames(
                  "__wab_instance",
                  sty.productCard___0RhE2
                )}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__rUzOv)}
                    role={"img"}
                    src={"/plasmic/random_chungs_furn_e_commerce/images/f2.bin"}
                  />
                }
                price={"$200.00"}
                ratings={
                  <Ratings
                    className={classNames(
                      "__wab_instance",
                      sty.ratings___8Llij
                    )}
                    stars={"four" as const}
                  />
                }
                title={"Dining Table"}
                withReviews={"withReviews" as const}
              />

              <ProductCard
                className={classNames("__wab_instance", sty.productCard__xj4Nd)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img___7F4Gs)}
                    role={"img"}
                    src={"/plasmic/random_chungs_furn_e_commerce/images/f3.bin"}
                  />
                }
                price={"$100.00"}
                ratings={
                  <Ratings
                    className={classNames("__wab_instance", sty.ratings__jHyb5)}
                    numReviews={"(23 Review)"}
                    stars={"five" as const}
                  />
                }
                title={"Chair and Table"}
                withReviews={"withReviews" as const}
              />

              <ProductCard
                className={classNames("__wab_instance", sty.productCard__hIlzC)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__vCd5W)}
                    role={"img"}
                    src={"/plasmic/random_chungs_furn_e_commerce/images/f4.bin"}
                  />
                }
                price={"$299.00"}
                ratings={
                  <Ratings
                    className={classNames(
                      "__wab_instance",
                      sty.ratings___13WSf
                    )}
                    numReviews={"(35 Review)"}
                  />
                }
                title={"Modern Arm Chair"}
                withReviews={"withReviews" as const}
              />
            </p.Stack>

            <div className={classNames(defaultcss.all, sty.box__hbAmd)}>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__sW7HA
                )}
              >
                {"Latest Blog"}
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__zq2Ti)}
            >
              <BlogPost
                className={classNames("__wab_instance", sty.blogPost__kyXw6)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__pIou)}
                    role={"img"}
                    src={"/plasmic/random_chungs_furn_e_commerce/images/b1.bin"}
                  />
                }
              />

              <BlogPost
                className={classNames("__wab_instance", sty.blogPost__muLgy)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__xlsfx)}
                    role={"img"}
                    src={"/plasmic/random_chungs_furn_e_commerce/images/b2.bin"}
                  />
                }
              />

              <BlogPost
                className={classNames("__wab_instance", sty.blogPost__bmDwe)}
                image={
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__ioGcr)}
                    role={"img"}
                    src={"/plasmic/random_chungs_furn_e_commerce/images/b3.bin"}
                  />
                }
              />
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box___3FQl)}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__ehOgn)}
                role={"img"}
                src={"/plasmic/random_chungs_furn_e_commerce/images/adidas.bin"}
              />

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img___9LSJ)}
                role={"img"}
                src={"/plasmic/random_chungs_furn_e_commerce/images/hm.bin"}
              />

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__cbMcj)}
                role={"img"}
                src={"/plasmic/random_chungs_furn_e_commerce/images/kappa.bin"}
              />

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__clz1O)}
                role={"img"}
                src={
                  "/plasmic/random_chungs_furn_e_commerce/images/lacoste.bin"
                }
              />

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__bhlh0)}
                role={"img"}
                src={"/plasmic/random_chungs_furn_e_commerce/images/levis.bin"}
              />
            </p.Stack>

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "productCarousel", "featureItem", "footer"],
  header: ["header"],
  productCarousel: ["productCarousel"],
  featureItem: ["featureItem"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  productCarousel: typeof ProductCarousel;
  featureItem: typeof FeatureItem;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHome__VariantsArgs;
  args?: PlasmicHome__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHome__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    productCarousel: makeNodeComponent("productCarousel"),
    featureItem: makeNodeComponent("featureItem"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
