// Takes an array of resources and retrieve the partition of the attribute of these resources
export const retrieveAttributePartitionFrom = (resources, attribute, withTotal = true) => {
  return resources.reduce((partition, resource) => {
    if (resource[attribute] !== undefined) {
      partition[resource[attribute]] = (partition[resource[attribute]] || 0) + 1;
      if (withTotal) {
        partition["Total"] = (partition["Total"] || 0) + 1;
      }
    }
    return partition;
  }, {});
};

// Takes an array of partitions and retrieve its values sorted
export const retrieveSortedKeysFromPartitions = (partitions, attribute) => {
  return partitions.reduce((keys, partition) => {
    keys = keys.concat(Object.keys(partition));
    return Array.from(new Set(keys));
  }, []);
};

// Returns a partition with values being the sum of the two partitions values
export const sumPartitions = (firstPartition, secondPartition) => {
  return [...new Set([...Object.keys(firstPartition), ...Object.keys(secondPartition)])].reduce(
    (partition, partitionKey) => {
      partition[partitionKey] =
        (firstPartition[partitionKey] || 0) + (secondPartition[partitionKey] || 0);
      return partition;
    },
    {}
  );
};
