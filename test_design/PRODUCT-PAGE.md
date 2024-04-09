# Test Analysis and Design
## Product Qty
Apply Equivalence Partitions Test Design Technique
| Partition 1 - Invalid | Partition 2 - Valid    | Partition 3 - Invalid    |
| :-------------------: | :--------------------: | :----------------------: |
| <1                    | 1-to-10000             | >10000                   |

The divided sets are called Equivalence Partitions or Equivalence Classes. Then we pick only one value from each partition for testing. The hypothesis behind this technique is that if one condition/value in a partition passes all others will also pass. Likewise, if one condition in a partition fails, all other conditions in that partition will fail.
| Partition 1 - Invalid | Partition 2 - Valid    | Partition 3 - Invalid    |
| :-------------------: | :--------------------: | :----------------------: |
| 0                     | 1                      | 10001                    |

Boundary Value Analysis– in Boundary Value Analysis, you test boundaries between equivalence partitions.
In our earlier equivalence partitioning example, instead of checking one value for each partition, you will
test values at both valid and invalid boundaries. Boundary Value Analysis is also called range checking.
In Boundary Value Analysis you will check 0, 1, 10000, 10001.
| Partition 1 - Invalid | Partition 2 - Valid    | Partition 3 - Invalid    |
| :-------------------: | :--------------------: | :----------------------: |
| 0                     | 1, 10000               | 10001                    |

## Product Settings (Size, Color, Qty)
Pairwise Testing.