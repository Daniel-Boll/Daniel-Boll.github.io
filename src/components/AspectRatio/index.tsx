import React from "react";
import clsx from "clsx";
import styles from "./AspectRatio.module.css";

function processAspectRatioValue(value: number) {
  return Number.isFinite(value) && value >= 0 ? value : 1;
}

interface AspectRatioProps {
  width: number;
  height: number;
  aspectRatio?: number;
  className?: string;
  children?: React.ReactNode;
}

/**
 * @see https://stackoverflow.com/a/53245657
 */
export function AspectRatio({
  width: widthRatio,
  height: heightRatio,
  children,
  className,
  ...otherProps
}: AspectRatioProps) {
  const width = processAspectRatioValue(widthRatio);
  const height = processAspectRatioValue(heightRatio);

  return (
    <div {...otherProps} className={clsx(className, styles.ratio)}>
      <svg className={styles.innerSvg} viewBox={`0 0 ${width} ${height}`}></svg>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
