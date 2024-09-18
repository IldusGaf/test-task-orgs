import { flow, Instance, types } from "mobx-state-tree";
import { fetcher } from "../api/orgApi";
import { IOrgAdd, IOrgDelete } from "../types/OrgTypes";
import { DELETE, POST } from "../../../../shared/const/common";

const RecLimit = types.model("RecLimit", {
  localEnabled: types.boolean,
  serverEnabled: types.boolean,
  serverLimitValue: types.number,
  _id: types.string,
});

const Org = types.model("Org", {
  _id: types.string,
  domain: types.string,
  exp: types.number,
  name: types.string,
  participants: types.number,
  recordingLimit: RecLimit,
});

export const OrgStore = types
  .model("OrgStore", {
    isLoading: false,
    items: types.optional(types.array(Org), []),
    error: types.maybe(types.union(types.undefined, types.string)),
  })
  .views((self) => ({
    get org() {
      return self;
    },
  }))
  .actions((self) => {
    function markLoading(loading: boolean) {
      self.isLoading = loading;
    }
    function setError(errMessage: string) {
      console.error(errMessage);
      self.error = errMessage;
    }
    const load = flow(function* () {
      markLoading(true);
      setError("");
      try {
        const resp = yield fetcher({});
        self.items = resp.orgs;
      } catch (err) {
        setError(`Ошибка загрузки данных: ${err}`);
      } finally {
        markLoading(false);
      }
    });
    const add = flow(function* (item: IOrgAdd) {
      markLoading(true);
      setError("");
      try {
        const resp = yield fetcher({ method: POST, body: item });
        if (resp.status === "ok") {
          load();
        }
      } catch (err) {
        setError(`Ошибка добавления данных: ${err}`);
      } finally {
        markLoading(false);
      }
    });
    const del = flow(function* (item: IOrgDelete) {
      markLoading(true);
      setError("");
      try {
        const resp = yield fetcher({ method: DELETE, body: item });
        if (resp.status === "ok") {
          load();
        }
      } catch (err) {
        setError(`Ошибка удаления данных: ${err}`);
      } finally {
        markLoading(false);
      }
    });

    return { load, add, del };
  });

export type OrgStoreType = Instance<typeof OrgStore>;
