import ObjectAction from '../../Search/components/actions/ObjectAction';
import { Entry, ObjectActions, ObjectMeta, UploadTitle } from './styled';

interface Props {
  isPatreon: boolean;
  size: string;
  title: string;
  icon: string | null;
  url: string;
  deleteUpload: () => void;
}

export default function UploadObjectEntry({
  size,
  title,
  icon,
  url,
  deleteUpload,
  isPatreon
}: Props) {
  return (
    <Entry>
      <ObjectMeta>
        <button type="button" className="delete" onClick={() => deleteUpload()}>
          Delete
        </button>
        {!isPatreon && (
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-info">Size</span>
              <span className="tag">{size} MB</span>
            </div>
          </div>
        )}
        {icon && <span>{icon}</span>}
        <div />
        <UploadTitle
          data-hj-suppress
          className="subtitle ml-2 is-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </ObjectMeta>
      <ObjectActions>
        <ObjectAction url={url} image="/icons/Anki_app_logo.png" />
      </ObjectActions>
    </Entry>
  );
}
