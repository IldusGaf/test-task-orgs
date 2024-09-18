import { Instance, types } from "mobx-state-tree";
import { OrgStore } from "../../components/orgs/model/stores/orgStore";

const RootStore = types.model({
  orgs: OrgStore,
});

export type RootStoreType = Instance<typeof RootStore>;
let rootStore: RootStoreType;

export const useStore = () => {
  if (!rootStore) {
    rootStore = RootStore.create({
      orgs: {
        isLoading: false,
        items: [],
        error: "",
      },
    });
  }

  return rootStore;
};
