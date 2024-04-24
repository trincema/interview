# Test Analysis and Design
## Test Web Page
URL: https://magento.softwaretestingboard.com/radiant-tee.html
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
### Decision Table
Test Design Techniques used: Decision Table based on Equivalence Partitioning and Boundary Value Analysis performed in the previous step.<br/>
Size: XS, S, M, L, XL<br/>
Color: Blue, Orange, Purple<br/>
Qty: 0, 1, 10000, 10001<br/>
In total we have 5x4x3=60 combinations<br/>
| #    | Size    | Color    | Qty     | Decision                                             |
| :--: |:------: | :------: | :-----: | :--------------------------------------------------: |
| 1    | XS      | Blue     | 0       | Error: "Please enter a quantity greater than 0."     |
| 2    | XS      | Blue     | 1       | Product added to Cart                                |
| 3    | XS      | Blue     | 10000   | Product added to Cart                                |
| 4    | XS      | Blue     | 10001   | Error: "The maximum you may purchase is 10000."      |
| ...  | ...     | ...      | ...     | ...                                                  |
| 60   | XL      | Purple   | 10001   | Error: "The maximum you may purchase is 10000."      |

However, according to ISTQB CTAL-TA, we should only multiply the biggest first 2 number of combinations, in this case Size and Quantity, and the 3rd setting which is Color, should be spread across other combinations.<br/>
Combinations: 5x4=20 combinations.
| #    | Size    | Qty      | Color     | Decision                                            |
| :--: |:------: | :------: | :-----:   | :-------------------------------------------------: |
| 1    | XS      | 0        | Blue      | Error: "Please enter a quantity greater than 0."    |
| ...  | ...     | ...      | ...       | ...                                                 |
| 20   | XL      | 10001    | Blue      | Error: "Please enter a quantity greater than 0."    |