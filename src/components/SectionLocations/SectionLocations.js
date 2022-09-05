import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import helsinkiImage from './images/hire-bricklayer-648.jpg';
import rovaniemiImage from './images/hire-labourer-648.jpg';
import rukaImage from './images/hire-tiler-648.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Bricklayer',
          helsinkiImage,
          '?address=United%20Kingdom&bounds=60.9093508%2C1.8623843%2C49.80777%2C-8.7497874&pub_amenities=has_all%3Abricklayer'
        )}
        {locationLink(
          'Labourer',
          rovaniemiImage,
          '?address=Surrey%2C%20United%20Kingdom&bounds=51.61445776%2C0.06202746%2C50.92689947%2C-0.85274009&mapSearch=true&pub_amenities=has_all%3Aconstruction_labourer'
        )}
        {locationLink(
          'Tiler',
          rukaImage,
          '?address=Greater%20London%2C%20United%20Kingdom&bounds=51.691872665%2C0.334015509%2C51.286760132%2C-0.510375075'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
