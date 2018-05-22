import React from "react";
import Heading, { HeadingUnderlined } from "./index.js";
export default stories =>
  stories
    .add(" デフォルト", () => <Heading> 見出し </Heading>)
    .add(" レベル 1", () => <Heading level={1}>見出しレベル1 </Heading>)
    .add(" レベル 1、 見た目 2", () => (
      <Heading level={1} visualLevel={2}>
        見出し レベル 1、 見た目 2{" "}
      </Heading>
    ))
    .add(" 下線付き", () => <HeadingUnderlined> 下線付き </HeadingUnderlined>)
    .add(" 下線付き、 レベル1", () => (
      <HeadingUnderlined level={1}>見出しレベル1 </HeadingUnderlined>
    ))
    .add(" 下線付き、 レベル1、 見た目2", () => (
      <HeadingUnderlined level={1} visualLevel={2}>
        下線付き、 見出しレベル1、 見た目2{" "}
      </HeadingUnderlined>
    ));
