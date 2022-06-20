import React, { useEffect, useRef, useState } from "react";
import "./scroll.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {}

const Scroll: React.FC<Props> = (props) => {
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, setBarTop] = useState(0);
  const scrollbarWidth = () => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = div.style.left = "-9999px"; // 把 div 放到屏幕之外，防止影响用户
    div.style.width = div.style.height = "100px";
    div.style.overflow = "scroll";
    document.body.appendChild(div);
    const width = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return width;
  };
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const div = containerRef.current;
    const scrollHeight = div!.scrollHeight;
    const viewHeight = div!.getBoundingClientRect().height;
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  });

  const onScroll = () => {
    const div = containerRef.current;
    const scrollHeight = div!.scrollHeight;
    const viewHeight = div!.getBoundingClientRect().height;
    const scrollTopHeight = div!.scrollTop;
    setBarTop((scrollTopHeight * viewHeight) / scrollHeight);
  };

  return (
    <div className="fui-scroll">
      <div
        className="fui-scroll-item"
        style={{ right: -scrollbarWidth() }}
        onScroll={onScroll}
        ref={containerRef}
      >
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
      </div>
      <div className="fui-scroll-track"></div>
      <div
        className="fui-scroll-bar"
        style={{ height: barHeight, top: barTop }}
      ></div>
    </div>
  );
};

export default Scroll;
