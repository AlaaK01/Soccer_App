/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Competition as Competition0 } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Competition from "./Competition";
import { Collection } from "@aws-amplify/ui-react";
export default function CompetitionsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Competition0,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          ComToMatches: await item.ComToMatches.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={5}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "CompetitionsCollection")}
      {...rest}
    >
      {(item, index) => (
        <Competition
          competition={item}
         
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Competition>
      )}
    </Collection>
  );
}
