import { Switch } from 'antd';
import ModalLogo from '../../_components/modal_logo';

export default function ProviderHead() {
  return (
    <div className="h-[var(--moonshot-layout-header-height)] flex justify-between items-center shadow-md px-4 rounded-md">
      <ModalLogo name="Gemini" />
      <Switch />
    </div>
  );
}
