import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > .fa': {
          margin: theme.spacing(2),
        },
      },
    }),
);

interface IProps {
  onClickHandler: () => void;
}

export default function Plus(props: IProps) {
  const classes = useStyles();

  const elem: HTMLElement | null = (document.querySelector('#font-awesome-css'));

  React.useEffect(() => {
    const node = loadCSS(
        'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
        elem ?? undefined,
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  });

  return (
      <div className={classes.root}>
        <Icon onClick={props.onClickHandler} className="fa fa-plus-circle" color="primary" style={{ fontSize: 30 }} />
      </div>
  );
}
