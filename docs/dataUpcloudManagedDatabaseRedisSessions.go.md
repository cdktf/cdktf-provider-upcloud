# `dataUpcloudManagedDatabaseRedisSessions` Submodule <a name="`dataUpcloudManagedDatabaseRedisSessions` Submodule" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataUpcloudManagedDatabaseRedisSessions <a name="DataUpcloudManagedDatabaseRedisSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions upcloud_managed_database_redis_sessions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

dataupcloudmanageddatabaseredissessions.NewDataUpcloudManagedDatabaseRedisSessions(scope Construct, id *string, config DataUpcloudManagedDatabaseRedisSessionsConfig) DataUpcloudManagedDatabaseRedisSessions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig">DataUpcloudManagedDatabaseRedisSessionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig">DataUpcloudManagedDatabaseRedisSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions">PutSessions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetSessions">ResetSessions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSessions` <a name="PutSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions"></a>

```go
func PutSessions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.putSessions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetId"></a>

```go
func ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetSessions` <a name="ResetSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.resetSessions"></a>

```go
func ResetSessions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataUpcloudManagedDatabaseRedisSessions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

dataupcloudmanageddatabaseredissessions.DataUpcloudManagedDatabaseRedisSessions_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

dataupcloudmanageddatabaseredissessions.DataUpcloudManagedDatabaseRedisSessions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

dataupcloudmanageddatabaseredissessions.DataUpcloudManagedDatabaseRedisSessions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

dataupcloudmanageddatabaseredissessions.DataUpcloudManagedDatabaseRedisSessions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataUpcloudManagedDatabaseRedisSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataUpcloudManagedDatabaseRedisSessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataUpcloudManagedDatabaseRedisSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataUpcloudManagedDatabaseRedisSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessions">Sessions</a></code> | <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList">DataUpcloudManagedDatabaseRedisSessionsSessionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessionsInput">SessionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Sessions`<sup>Required</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessions"></a>

```go
func Sessions() DataUpcloudManagedDatabaseRedisSessionsSessionsList
```

- *Type:* <a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList">DataUpcloudManagedDatabaseRedisSessionsSessionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SessionsInput`<sup>Optional</sup> <a name="SessionsInput" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.sessionsInput"></a>

```go
func SessionsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataUpcloudManagedDatabaseRedisSessionsConfig <a name="DataUpcloudManagedDatabaseRedisSessionsConfig" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

&dataupcloudmanageddatabaseredissessions.DataUpcloudManagedDatabaseRedisSessionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Service: *string,
	Id: *string,
	Limit: *f64,
	Offset: *f64,
	Order: *string,
	Sessions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.service">Service</a></code> | <code>*string</code> | Service's UUID for which these sessions belongs to. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#id DataUpcloudManagedDatabaseRedisSessions#id}. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.limit">Limit</a></code> | <code>*f64</code> | Number of entries to receive at most. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.offset">Offset</a></code> | <code>*f64</code> | Offset for retrieved results based on sort order. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.order">Order</a></code> | <code>*string</code> | Order by session field and sort retrieved results. Limited variables can be used for ordering. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.sessions">Sessions</a></code> | <code>interface{}</code> | sessions block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Service's UUID for which these sessions belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#service DataUpcloudManagedDatabaseRedisSessions#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#id DataUpcloudManagedDatabaseRedisSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Number of entries to receive at most.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#limit DataUpcloudManagedDatabaseRedisSessions#limit}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset for retrieved results based on sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#offset DataUpcloudManagedDatabaseRedisSessions#offset}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Order by session field and sort retrieved results. Limited variables can be used for ordering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#order DataUpcloudManagedDatabaseRedisSessions#order}

---

##### `Sessions`<sup>Optional</sup> <a name="Sessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsConfig.property.sessions"></a>

```go
Sessions interface{}
```

- *Type:* interface{}

sessions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.0.3/docs/data-sources/managed_database_redis_sessions#sessions DataUpcloudManagedDatabaseRedisSessions#sessions}

---

### DataUpcloudManagedDatabaseRedisSessionsSessions <a name="DataUpcloudManagedDatabaseRedisSessionsSessions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

&dataupcloudmanageddatabaseredissessions.DataUpcloudManagedDatabaseRedisSessionsSessions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataUpcloudManagedDatabaseRedisSessionsSessionsList <a name="DataUpcloudManagedDatabaseRedisSessionsSessionsList" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

dataupcloudmanageddatabaseredissessions.NewDataUpcloudManagedDatabaseRedisSessionsSessionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataUpcloudManagedDatabaseRedisSessionsSessionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get"></a>

```go
func Get(index *f64) DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference <a name="DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-upcloud-go/upcloud/v14/dataupcloudmanageddatabaseredissessions"

dataupcloudmanageddatabaseredissessions.NewDataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeChannelSubscriptions">ActiveChannelSubscriptions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeDatabase">ActiveDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions">ActivePatternMatchingChannelSubscriptions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.clientAddr">ClientAddr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionAge">ConnectionAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionIdle">ConnectionIdle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flags">Flags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flagsRaw">FlagsRaw</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.multiExecCommands">MultiExecCommands</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBuffer">OutputBuffer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBufferMemory">OutputBufferMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputListLength">OutputListLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBuffer">QueryBuffer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBufferFree">QueryBufferFree</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveChannelSubscriptions`<sup>Required</sup> <a name="ActiveChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeChannelSubscriptions"></a>

```go
func ActiveChannelSubscriptions() *f64
```

- *Type:* *f64

---

##### `ActiveDatabase`<sup>Required</sup> <a name="ActiveDatabase" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activeDatabase"></a>

```go
func ActiveDatabase() *string
```

- *Type:* *string

---

##### `ActivePatternMatchingChannelSubscriptions`<sup>Required</sup> <a name="ActivePatternMatchingChannelSubscriptions" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.activePatternMatchingChannelSubscriptions"></a>

```go
func ActivePatternMatchingChannelSubscriptions() *f64
```

- *Type:* *f64

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `ClientAddr`<sup>Required</sup> <a name="ClientAddr" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.clientAddr"></a>

```go
func ClientAddr() *string
```

- *Type:* *string

---

##### `ConnectionAge`<sup>Required</sup> <a name="ConnectionAge" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionAge"></a>

```go
func ConnectionAge() *f64
```

- *Type:* *f64

---

##### `ConnectionIdle`<sup>Required</sup> <a name="ConnectionIdle" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.connectionIdle"></a>

```go
func ConnectionIdle() *f64
```

- *Type:* *f64

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flags"></a>

```go
func Flags() *[]*string
```

- *Type:* *[]*string

---

##### `FlagsRaw`<sup>Required</sup> <a name="FlagsRaw" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.flagsRaw"></a>

```go
func FlagsRaw() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultiExecCommands`<sup>Required</sup> <a name="MultiExecCommands" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.multiExecCommands"></a>

```go
func MultiExecCommands() *f64
```

- *Type:* *f64

---

##### `OutputBuffer`<sup>Required</sup> <a name="OutputBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBuffer"></a>

```go
func OutputBuffer() *f64
```

- *Type:* *f64

---

##### `OutputBufferMemory`<sup>Required</sup> <a name="OutputBufferMemory" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputBufferMemory"></a>

```go
func OutputBufferMemory() *f64
```

- *Type:* *f64

---

##### `OutputListLength`<sup>Required</sup> <a name="OutputListLength" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.outputListLength"></a>

```go
func OutputListLength() *f64
```

- *Type:* *f64

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `QueryBuffer`<sup>Required</sup> <a name="QueryBuffer" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBuffer"></a>

```go
func QueryBuffer() *f64
```

- *Type:* *f64

---

##### `QueryBufferFree`<sup>Required</sup> <a name="QueryBufferFree" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.queryBufferFree"></a>

```go
func QueryBufferFree() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-upcloud.dataUpcloudManagedDatabaseRedisSessions.DataUpcloudManagedDatabaseRedisSessionsSessionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



