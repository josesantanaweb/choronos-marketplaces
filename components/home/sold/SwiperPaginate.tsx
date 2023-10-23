import { useRef, useEffect, useState } from "react";

import twMerge from "@/utils/tw-merge-custom";

interface ISwiperPaginationProps {
  count: number;
  activeIndex: number;
  className?: string;
  onClick?: (index: number) => void;
}

const array_move = (arr: any[], old_index: number, new_index: number) => {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }

  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);

  return arr;
}

const SwiperPagination = (props: ISwiperPaginationProps) => {
  const [show, setShow] = useState<boolean>(false);

  const containerWidth = (props.count - 1) * 27 + 36 + (props.count - 1) * 4;

  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    let childrens = [...ref.current.children];

    let temp_childrens = array_move(childrens, 0, props.activeIndex);

    for (let i = 0; i < temp_childrens.length; i++) {
      const children = temp_childrens[i];

      if (!children) continue;

      let sumPreviusChildren = 0;

      for (let j = 0; j < temp_childrens.length && j < i; j++) {
        if (!temp_childrens[j]) continue;

        sumPreviusChildren += temp_childrens[j].offsetWidth + 4;
      }

      children.style.transform = `translateX(${sumPreviusChildren}px)`;
    }

    setShow(true);
  }, [props.activeIndex]);

  return (
    <div
      className={twMerge(
        `flex relative h-[6px]`,
        !show ? "opacity-0" : "",
        props.className
      )}
      style={{ width: containerWidth }}
      ref={ref}
    >
      {Array.from({ length: props.count }).map((_, index) => (
        <div
          key={index}
          className={`cursor-pointer absolute w-[27px] h-[6px] rounded-all-full bg-white bg-opacity-10 after-gradient-purple-100 after:opacity-0 transition-all duration-300 ease-[cubic-bezier(0.24,0.68,0.57,1.15)] ${
            0 === index ? "after:opacity-100 w-[36px]" : ""
          }`}
          onClick={() => {
            if (index === 0) return;

            if (index <= props.activeIndex) {
              props.onClick && props.onClick(index - 1);
            } else {
              props.onClick && props.onClick(index);
            }
          }}
        />
      ))}
    </div>
  );
}

export default SwiperPagination
