import { css, cx } from '@emotion/css';
import React, { FC } from 'react';

import { colorManipulator } from '@grafana/data';
import { Icon, useTheme2, styleMixins } from '@grafana/ui';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  const theme = useTheme2();
  const imagePath = `public/img/insight_icon_${theme.isDark ? 'dark' : 'light'}.png`;
  return <img className={className} src={imagePath} alt="Insight" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const theme = useTheme2();

  const background = css`
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: url(public/img/g8_login_${theme.isDark ? 'dark' : 'light'}.svg);
      background-position: top center;
      background-size: auto;
      background-repeat: no-repeat;

      opacity: 0;
      transition: opacity 3s ease-in-out;

      @media ${styleMixins.mediaUp(theme.v1.breakpoints.md)} {
        background-position: center;
        background-size: cover;
      }
    }
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <Icon size="xl" name="home-alt" />;

  // disabled this icon because it's too similar to the search icon
  // const theme = useTheme2();
  // const imagePath = `public/img/insight_icon_small_${theme.isDark ? 'dark' : 'light'}.png`;
  // return <img className={className} src={imagePath} alt="Insight" />;
};

const LoginBoxBackground = () => {
  const theme = useTheme2();
  return css`
    background: ${colorManipulator.alpha(theme.colors.background.primary, 0.7)};
    background-size: cover;
  `;
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = 'NetSapiens Insight';
  static LoginTitle = (): null | string => {
    return '';
  };
  static GetLoginSubTitle = (): null | string => {
    return '';
  };
}
