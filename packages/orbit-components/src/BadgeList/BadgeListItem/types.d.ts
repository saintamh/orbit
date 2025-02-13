// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as React from "react";

import type * as Common from "../../common/types";

export type Type = "neutral" | "info" | "success" | "warning" | "critical";
export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly type?: Type;
  readonly strikeThrough?: boolean;
  readonly icon: React.ReactNode;
}
