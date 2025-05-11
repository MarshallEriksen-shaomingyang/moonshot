interface IProps {
  iconClass: string;
  svgClass?: string;
  fill?: string;
}

function SvgIcon(props: IProps) {
  const { iconClass, fill, svgClass } = props;
  return (
    <i aria-hidden="true">
      <svg className={`svg-class ${svgClass}`}>
        <use xlinkHref={'#' + iconClass} fill={fill} />
      </svg>
    </i>
  );
}

export default SvgIcon;
