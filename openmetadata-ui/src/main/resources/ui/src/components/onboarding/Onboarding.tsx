/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import classNames from 'classnames';
import React, { FC } from 'react';
import SVGIcons, { Icons } from '../../utils/SvgUtils';

const data = [
  'Look at the popular data assets in your organization.',
  'Data works well when it is owned. Take a look at the data assets that you own and claim ownership.',
  'Follow the datasets that you frequently use to stay informed about it.',
];

interface OnboardingProp {
  showLogo?: boolean;
}

const Onboarding: FC<OnboardingProp> = ({
  showLogo = true,
}: OnboardingProp) => {
  return (
    <div
      className={classNames(
        'tw-flex tw-items-center tw-justify-around tw-mt-10'
      )}
      data-testid="onboarding">
      <div className="tw-p-4" style={{ maxWidth: '700px' }}>
        <div className="tw-mb-6">
          <h5>Welcome to OpenMetadata.</h5>
          <p className="tw-font-normal">
            A central place to discover and collaborate on all your data.
          </p>
        </div>
        <div className="tw-text-base">
          {data.map((d, i) => (
            <div className="tw-flex tw-items-center tw-gap-4 tw-mb-5" key={i}>
              <div className="tw-flex tw-items-center">
                <span
                  className="tw-w-6 tw-h-6 tw-flex tw-items-center tw-justify-center tw-font-normal tw-p-2 
                  tw-bg-primary-lite tw-text-primary tw-rounded-full">
                  {i + 1}
                </span>
              </div>
              <div>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showLogo ? (
        <div>
          <SVGIcons
            alt="OpenMetadata Logo"
            className="tw-h-auto tw-filter tw-grayscale tw-opacity-50"
            data-testid="logo"
            icon={Icons.LOGO_SMALL}
            width="350"
          />
        </div>
      ) : null}
    </div>
  );
};

export default Onboarding;
