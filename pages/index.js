import Link from 'next/link';

import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Layout from '../components/Layout'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '90vw',
    height: '90hv',
    cursor: 'pointer',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function Index(props) {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Batma</ListSubheader>
          </GridListTile>
          {props.shows.map(show => (
            
              <GridListTile key={show.id}>
                <img src={show.image.medium} alt={show.name} />
                <Link href="/p/[id]" as={`/p/${show.id}`}>
                <GridListTileBar
                  title={show.name}
                  subtitle={<span>Type: {show.type}</span>}
                  actionIcon={
                    <IconButton aria-label={`info about ${show.title}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
                </Link>
              </GridListTile>
            
          ))}
        </GridList>
      </div>
    </Layout>
  );
}

Index.getInitialProps = async function () {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`);
  const data = await res.json();
  return {
    title: 'Batman',
    shows: data.map(entry => entry.show)
  };
};

