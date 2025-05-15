// 模型type
export type ProviderType = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
};

/**
 * 模型类别
 * @param id 模型id
 * @param name 模型名称
 * @param tags 模型能力
 * @param enabled 是否启用
 */
export type ModalType = {
  id: string;
  name: string;
  tags: string[];
  enabled: boolean;
};
