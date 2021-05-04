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
