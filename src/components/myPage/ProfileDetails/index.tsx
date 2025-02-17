import React from 'react';
import {
  EditInfo,
  ProfileInfoDetails,
  ProfileInfoDetailsContent,
} from './style';
import { BsPencilFill } from 'react-icons/bs';
import { Input } from '../../common/Input';
import { ProfileDetailsProps } from '../../../models/MyPage';

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  label,
  isEditing,
  setIsEditing,
  value,
  setValue,
  placeholder,
  handleChange,
  detail,
}) => {
  return (
    <ProfileInfoDetails>
      <label htmlFor="id">
        | {label}
        <button onClick={() => setIsEditing(true)} aria-label={`${label} 수정`}>
          <BsPencilFill className="icon_edit" />
        </button>
      </label>
      {isEditing ? (
        <EditInfo>
          <Input
            type="id"
            id="id"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder={placeholder}
          />
          <button onClick={handleChange}>수정완료</button>
        </EditInfo>
      ) : (
        <ProfileInfoDetailsContent>{detail}</ProfileInfoDetailsContent>
      )}
    </ProfileInfoDetails>
  );
};
